import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
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
      title: "Turite brėžinius ar klausimų?",
      description: "Atsiųskite užklausą — pasiūlysime greitą ir aiškią sąmatą.",
      buttonText: "Gauti pasiūlymą",
      buttonLink: "/kontaktai"
    },
    en: {
      title: "Have drawings or questions?",
      description: "Send us a request — we will offer a quick and clear estimate.",
      buttonText: "Get a quote",
      buttonLink: "/en/contact"
    }
  };
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-[#D9E7FF] rounded-2xl px-6 py-12 md:px-10 md:py-14 text-center">
          <h3 className="text-h3 text-accent text-[clamp(2.0625rem,3.75vw,2.625rem)]">{content[currentLang].title}</h3>
          <p className="text-body text-text-secondary max-w-2xl mx-auto mt-4">
            {content[currentLang].description}
          </p>
          <div className="mt-6">
            <Button asChild className="btn-primary">
              <Link to={content[currentLang].buttonLink}>{content[currentLang].buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


