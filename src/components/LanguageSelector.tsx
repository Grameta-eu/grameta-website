import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "lt", name: "LT", flag: "🇱🇹" },
  { code: "en", name: "EN", flag: "🇬🇧" },
];

export default function LanguageSelector({ isMobileMenu = false }: { isMobileMenu?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/en")) {
      setCurrentLanguage(languages[1]);
    } else {
      setCurrentLanguage(languages[0]);
    }
  }, [location.pathname]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const getLanguagePath = (langCode: string) => {
    const pathname = location.pathname;

    if (pathname === "/" && langCode === "en") return "/en";
    if (pathname === "/en" && langCode === "lt") return "/";

    const pathTranslations: Record<string, string> = {
      "/apie": "/en/about",
      "/paslaugos": "/en/services",
      "/produktai": "/en/products",
      "/kontaktai": "/en/contact",

      "/en/about": "/apie",
      "/en/services": "/paslaugos",
      "/en/products": "/produktai",
      "/en/contact": "/kontaktai",
    };

    if (pathTranslations[pathname]) return pathTranslations[pathname];

    return langCode === "en" ? "/en" : "/";
  };

  if (isMobileMenu) {
    return (
      <div className="flex items-center justify-center gap-4">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            to={getLanguagePath(lang.code)}
            className={`flex items-center justify-center h-10 w-10 rounded-full ${
              currentLanguage.code === lang.code ? "bg-accent text-white" : "bg-muted hover:bg-accent/10"
            } transition-colors`}
          >
            <span className="text-lg">{lang.flag}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={toggleDropdown}>
        <span className="text-lg">{currentLanguage.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-1 min-w-[100px] z-50"
          >
            {languages.map((lang) => (
              <Link
                key={lang.code}
                to={getLanguagePath(lang.code)}
                className={`px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 ${
                  currentLanguage.code === lang.code ? "text-accent" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


