import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";

type Language = {
  code: string;
  name: string;
  displayName: string;
};

const languages: Language[] = [
  { code: "lt", name: "LT", displayName: "Lietuvių" },
  { code: "en", name: "EN", displayName: "English" },
];

export default function LanguageSelector({ isMobileMenu = false, isTransparent = false }: { isMobileMenu?: boolean; isTransparent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current language based on path
  useEffect(() => {
    if (location.pathname.startsWith("/en")) {
      setCurrentLanguage(languages[1]);
    } else {
      setCurrentLanguage(languages[0]);
    }
  }, [location.pathname]);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Get equivalent path in other language
  const getLanguagePath = (langCode: string) => {
    // Handle root path
    if (location.pathname === "/") {
      return langCode === "en" ? "/en" : "/";
    }
    
    // Handle language-specific homepages
    if (location.pathname === "/en") {
      return langCode === "lt" ? "/" : "/en";
    }
    
    // Path translations for specific pages
    const pathTranslations: Record<string, Record<string, string>> = {
      // Lithuanian paths
      "/apie": { en: "/en/about", lt: "/apie" },
      "/paslaugos": { en: "/en/services", lt: "/paslaugos" },
      "/produktai": { en: "/en/products", lt: "/produktai" },
      "/pajegumai": { en: "/en/capabilities", lt: "/pajegumai" },
      "/kontaktai": { en: "/en/contact", lt: "/kontaktai" },
      
      // English paths
      "/en/about": { lt: "/apie", en: "/en/about" },
      "/en/services": { lt: "/paslaugos", en: "/en/services" },
      "/en/products": { lt: "/produktai", en: "/en/products" },
      "/en/capabilities": { lt: "/pajegumai", en: "/en/capabilities" },
      "/en/contact": { lt: "/kontaktai", en: "/en/contact" },
    };
    
    // Check if we have a translation for this path
    if (pathTranslations[location.pathname] && pathTranslations[location.pathname][langCode]) {
      return pathTranslations[location.pathname][langCode];
    }
    
    // If no specific translation found - fallback to the root of the selected language
    return langCode === "en" ? "/en" : "/";
  };

  const handleLanguageChange = (langCode: string) => {
    const newPath = getLanguagePath(langCode);
    navigate(newPath);
    setIsOpen(false);
  };

  if (isMobileMenu) {
    // Mobile menu version - two containers in a row
    return (
      <div className="flex items-center justify-center gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-colors min-w-[80px] ${
              currentLanguage.code === lang.code
                ? "bg-accent text-white border-transparent font-medium"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="text-sm font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <Button
        variant="ghost"
        size="default"
        className={`flex items-center gap-2 px-4 py-2 ${
          isTransparent 
            ? "text-white hover:bg-white/10" 
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        onClick={toggleDropdown}
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg border border-gray-200 min-w-full z-50 overflow-hidden">
          {languages
            .filter(lang => lang.code !== currentLanguage.code)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full px-4 py-2 text-sm flex items-center gap-2 transition-colors text-gray-700 hover:bg-gray-50 border-t border-gray-200"
              >
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}


