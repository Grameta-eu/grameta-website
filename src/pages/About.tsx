import { Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import cncLatheImage from '@/assets/cnc-lathe-operation.jpg';
import SEO from '@/components/SEO';

const About = () => {
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
      badge: "Kas mes esame",
      title: "Apie mus",
      text1: "UAB \"Grameta\" — jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo paslaugas Lietuvos bei užsienio rinkoms.",
      text2: "Įmonė turi technologines galimybes įvykdyti užsakymus programinio valdymo staklėmis bei pagaminti tikslius gaminius ir konstrukcines detales iš anglinio, legiruoto, nerūdijančio plieno, aliuminio, bronzos ar plastiko.",
      text3: "Turimi įrengimai leidžia greitai ir lanksčiai įvykdyti mažų bei vidutinių serijų užsakymus. Pagrindinės gamybos sritys:",
      industries: [
        'Mašinų pramonė',
        'Medicina', 
        'Statybos pramonė',
        'Elektronika'
      ]
    },
    en: {
      badge: "Who we are",
      title: "About us",
      text1: "UAB \"Grameta\" is a young and ambitious company providing CNC milling and turning services to both Lithuanian and international markets.",
      text2: "The company has the technological capabilities to process orders using CNC machines and manufacture precise products and structural parts from carbon steel, alloy steel, stainless steel, aluminum, bronze, or plastics.",
      text3: "Our equipment allows us to quickly and flexibly fulfill small and medium series orders. The main production areas include:",
      industries: [
        'Machinery industry',
        'Medicine',
        'Construction industry', 
        'Electronics'
      ]
    }
  };
  // SEO content for about page
  const seoContent = {
    lt: {
      title: 'Apie mus - Grameta | CNC frezavimo ir tekinimo specialistai',
      description: 'Sužinokite apie UAB Grameta - patikimą CNC frezavimo ir tekinimo paslaugų teikėją Lietuvoje. Mūsų patirtis, technologijos ir specializacijos sritys.',
      keywords: 'apie Grameta, CNC specialistai, metalo apdirbimas, įmonės istorija, patirtis, technologijos, Lietuva'
    },
    en: {
      title: 'About Us - Grameta | CNC Milling and Turning Specialists',
      description: 'Learn about UAB Grameta - a trusted CNC milling and turning service provider in Lithuania. Our experience, technologies and areas of specialization.',
      keywords: 'about Grameta, CNC specialists, metal machining, company history, experience, technologies, Lithuania'
    }
  };

  return (
    <>
      <SEO 
        title={seoContent[currentLang].title}
        description={seoContent[currentLang].description}
        keywords={seoContent[currentLang].keywords}
        image="/cnc-lathe-operation.jpg"
      />
      <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[1180px] mx-auto">
            {/* Heading block */}
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3 inline-block">{content[currentLang].badge}</span>
              <h1 className="text-h1 tracking-tight mb-4">{content[currentLang].title}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[44%_56%] gap-x-6 lg:gap-x-10 gap-y-6 md:gap-y-8 items-center">
              {/* Image column (slightly larger on desktop) */}
              <div className="order-1 md:order-1 lg:order-2 lg:py-2">
                <div className="image-card-soft rounded-[20px] overflow-hidden">
                  <img
                    src={cncLatheImage}
                    alt="UAB Grameta CNC staklės gamyboje"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text column */}
              <div className="order-2 md:order-2 lg:order-1">
                <div className="max-w-[65ch]">
                  <div className="space-y-4 text-[#4A4A4A] [line-height:1.65]">
                    <p className="text-body">
                      {content[currentLang].text1}
                    </p>
                    <p className="text-body">
                      {content[currentLang].text2}
                    </p>
                    <p className="text-body">
                      {content[currentLang].text3}
                    </p>
                  </div>

                  {/* Bullets - 2 columns desktop, 1 column mobile */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {content[currentLang].industries.map((industry, index) => (
                      <div key={index} className="flex items-center gap-3 min-w-0">
                        <span className="h-8 w-8 rounded-full bg-[#E6F0FF] flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-accent" />
                        </span>
                        <span className="text-small font-semibold text-[#1A1A1A] truncate">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default About;