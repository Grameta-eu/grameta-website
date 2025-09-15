import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Detect current language from path
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    return 'lt';
  };

  const currentLang = getCurrentLanguage();

  // Language-specific content
  const content = {
    lt: {
      description: "Jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo paslaugas Lietuvos bei užsienio rinkoms.",
      quickLinksTitle: "Greitos nuorodos",
      contactTitle: "Kontaktai",
      workingHours: "Darbo laikas:",
      workingTime: "I–V 8:00–17:00",
      copyright: "Visos teisės saugomos.",
      quickLinks: [
        { name: 'Pagrindinis', href: '/' },
        { name: 'Apie mus', href: '/apie' },
        { name: 'Paslaugos', href: '/paslaugos' },
        { name: 'Mūsų produktai', href: '/produktai' },
        { name: 'Kontaktai', href: '/kontaktai' },
      ]
    },
    en: {
      description: "A young and promising company providing CNC milling and turning services to Lithuanian and foreign markets.",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact",
      workingHours: "Working hours:",
      workingTime: "Mon–Fri 8:00–17:00",
      copyright: "All rights reserved.",
      quickLinks: [
        { name: 'Home', href: '/en' },
        { name: 'About us', href: '/en/about' },
        { name: 'Services', href: '/en/services' },
        { name: 'Our products', href: '/en/products' },
        { name: 'Contact', href: '/en/contact' },
      ]
    }
  };

  const quickLinks = content[currentLang].quickLinks;

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-foreground rounded flex items-center justify-center">
                <span className="text-accent font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">Grameta</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {content[currentLang].description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{content[currentLang].quickLinksTitle}</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm hover:text-accent-foreground/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{content[currentLang].contactTitle}</h3>
            <div className="space-y-3">
              <a 
                href="mailto:cnctekinimas@gmail.com" 
                className="flex items-center space-x-3 text-sm hover:text-accent-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>cnctekinimas@gmail.com</span>
              </a>
              <a 
                href="tel:+37065778272" 
                className="flex items-center space-x-3 text-sm hover:text-accent-foreground/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+370 (657) 78 272</span>
              </a>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Vandžiogalos pl. 106G, Domeikavos k., Kaunas</span>
              </div>
              <div className="text-sm">
                <strong>{content[currentLang].workingHours}</strong><br />
                {content[currentLang].workingTime}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-center">
          <p className="text-sm">
            © {currentYear} UAB "Grameta". {content[currentLang].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;