import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';

interface HeaderProps {
  overlay?: boolean;
}

const Header = ({ overlay = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Pagrindinis', href: '/' },
    { name: 'Apie mus', href: '/apie' },
    { name: 'Paslaugos', href: '/paslaugos' },
    { name: 'Mūsų produktai', href: '/produktai' },
    { name: 'Pajėgumai', href: '/pajegumai' },
    { name: 'Kontaktai', href: '/kontaktai' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isTransparent = false;

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out top-0 translate-y-0 opacity-100 bg-white ${isScrolled ? 'border-b border-border-subtle' : ''}`}
    >
      <div className="container-custom">
        <div className="relative flex items-center justify-between lg:justify-end h-[5.0625rem] md:h-[6.75rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center lg:hidden">
            <img
              src="/grameta.webp"
              alt="Grameta"
              className="h-[5.0625rem] md:h-[6.75rem] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-base font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-accent`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Selector (Desktop) */}
          <div className="hidden lg:flex">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border-subtle shadow-lg">
            <nav className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <LanguageSelector isMobileMenu />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;