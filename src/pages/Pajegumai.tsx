import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

const Pajegumai = () => {
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
      badge: "Mūsų pajėgumai",
      title: "Galimybės",
      subtitle: "Čia rasite informaciją apie mūsų technologinius pajėgumus, įrangą ir procesus."
    },
    en: {
      badge: "Our capabilities",
      title: "Capabilities",
      subtitle: "Here you can find information about our technological capacity, equipment, and processes."
    }
  };

  // SEO content for capabilities page
  const seoContent = {
    lt: {
      title: 'Pajėgumai - Grameta | Mūsų technologinės galimybės ir įranga',
      description: 'Susipažinkite su UAB Grameta technologiniais pajėgumais, įranga ir procesais. CNC staklės, apdirbimo galimybės ir techniniai sprendimai.',
      keywords: 'CNC pajėgumai, technologinės galimybės, įranga, apdirbimo procesai, CNC staklės, Grameta galimybės'
    },
    en: {
      title: 'Capabilities - Grameta | Our Technological Capacity and Equipment',
      description: 'Learn about UAB Grameta technological capabilities, equipment and processes. CNC machines, machining capabilities and technical solutions.',
      keywords: 'CNC capabilities, technological capacity, equipment, machining processes, CNC machines, Grameta capabilities'
    }
  };

  return (
    <>
      <SEO 
        title={seoContent[currentLang].title}
        description={seoContent[currentLang].description}
        keywords={seoContent[currentLang].keywords}
        image="/placeholder.svg"
      />
      <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">{content[currentLang].badge}</div>
            <h1 className="text-h1 tracking-tight mb-4">{content[currentLang].title}</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              {content[currentLang].subtitle}
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 1"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 2"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 3"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 4"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default Pajegumai;


