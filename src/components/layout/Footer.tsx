import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Pagrindinis', href: '/' },
    { name: 'Apie mus', href: '/apie' },
    { name: 'Paslaugos', href: '/paslaugos' },
    { name: 'Mūsų produktai', href: '/produktai' },
    { name: 'Kontaktai', href: '/kontaktai' },
  ];

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
              Jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo paslaugas 
              Lietuvos bei užsienio rinkoms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Greitos nuorodos</h3>
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
            <h3 className="font-semibold text-lg">Kontaktai</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@grameta.lt" 
                className="flex items-center space-x-3 text-sm hover:text-accent-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@grameta.lt</span>
              </a>
              <a 
                href="tel:+37000000000" 
                className="flex items-center space-x-3 text-sm hover:text-accent-foreground/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+370 000 00000</span>
              </a>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Gamybos g. 1<br />LT-00000, Lietuva</span>
              </div>
              <div className="text-sm">
                <strong>Darbo laikas:</strong><br />
                I–V 8:00–17:00
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-center">
          <p className="text-sm">
            © {currentYear} UAB „Grameta". Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;