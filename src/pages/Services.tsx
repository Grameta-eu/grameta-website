import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, RotateCcw, Package, FileText, CheckCircle, Wrench } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

const Services = () => {
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
      badge: "Mūsų teikiamos",
      title: "Paslaugos",
      subtitle: "Atliekame CNC frezavimo ir tekinimo darbus pagal jūsų brėžinius. Dirbame su plienu, aliuminiu, bronza ir techniniais plastikais. Užtikriname tikslumą ir patikimumą mažoms bei vidutinėms serijoms.",
      services: [
        {
          icon: <Settings className="h-5 w-5 md:h-6 md:w-6" />,
          title: "CNC frezavimas",
          description: "3 ašių frezavimas, tikslūs paviršiai ir geometrija, prototipai ir serijos.",
          badge: "Medžiagos: plienas, aliuminis, bronza, plastikas"
        },
        {
          icon: <RotateCcw className="h-5 w-5 md:h-6 md:w-6" />,
          title: "CNC tekinimas",
          description: "Detalių tekinimas nuo vienetinių iki vidutinių kiekių, stabilūs tolerancijų rezultatai.",
          badge: "Skersmenys pagal poreikį (pagal brėžinį)"
        },
        {
          icon: <Package className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Medžiagų parinkimas ir tiekimas",
          description: "Padedame parinkti tinkamą lydinį ir ruošinį ekonomiškam gamybos ciklui.",
          badge: "Plienai, spalvotieji metalai, plastikai"
        },
        {
          icon: <FileText className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Brėžinių peržiūra ir konsultacijos",
          description: "Patikriname gamybines galimybes, rekomenduojame tolerancijas ir paviršiaus apdirbimą.",
          badge: "STEP, DXF, DWG, PDF"
        },
        {
          icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Kokybės kontrolė",
          description: "Matavimai pagal poreikį, atsekamumas, patikrinimo ataskaitos susitarus.",
          badge: "Dokumentacija pagal užklausą"
        },
        {
          icon: <Wrench className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Surinkimas ir pakuotė",
          description: "Bazinis komponentų surinkimas ir saugi pakuotė transportui.",
          badge: "Pagal projektą"
        }
      ]
    },
    en: {
      badge: "Our services",
      title: "Services",
      subtitle: "We provide CNC milling and turning based on your drawings. We work with steel, aluminum, bronze, and engineering plastics. We ensure precision and reliability for small and medium series production.",
      services: [
        {
          icon: <Settings className="h-5 w-5 md:h-6 md:w-6" />,
          title: "CNC milling",
          description: "3-axis milling, precise surfaces and geometry, prototypes and series production.",
          badge: "Materials: steel, aluminum, bronze, plastics"
        },
        {
          icon: <RotateCcw className="h-5 w-5 md:h-6 md:w-6" />,
          title: "CNC turning",
          description: "Turning of parts from single pieces to medium volumes, with stable tolerance results.",
          badge: "Diameters as required (based on drawings)"
        },
        {
          icon: <Package className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Material selection and supply",
          description: "We help choose the right alloy and blanks for an efficient production cycle.",
          badge: "Steels, non-ferrous metals, plastics"
        },
        {
          icon: <FileText className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Drawing review and consultations",
          description: "We check manufacturability, recommend tolerances and surface finishes.",
          badge: "STEP, DXF, DWG, PDF"
        },
        {
          icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Quality control",
          description: "Measurements upon request, traceability, inspection reports by agreement.",
          badge: "Documentation available upon request"
        },
        {
          icon: <Wrench className="h-5 w-5 md:h-6 md:w-6" />,
          title: "Assembly and packaging",
          description: "Basic component assembly and secure packaging for transport.",
          badge: "Project-based"
        }
      ]
    }
  };

  const services = content[currentLang].services;

  // SEO content for services page
  const seoContent = {
    lt: {
      title: 'Paslaugos - Grameta | CNC frezavimas, tekinimas ir metalo apdirbimas',
      description: 'UAB Grameta teikiamos CNC frezavimo ir tekinimo paslaugos. Medžiagų parinkimas, brėžinių peržiūra, kokybės kontrolė. Dirbame su plienu, aliuminiu, bronza.',
      keywords: 'CNC frezavimas, CNC tekinimas, metalo apdirbimas, medžiagų parinkimas, kokybės kontrolė, brėžinių peržiūra, paslaugos, Grameta'
    },
    en: {
      title: 'Services - Grameta | CNC Milling, Turning and Metal Machining',
      description: 'CNC milling and turning services provided by UAB Grameta. Material selection, drawing review, quality control. We work with steel, aluminum, bronze.',
      keywords: 'CNC milling, CNC turning, metal machining, material selection, quality control, drawing review, services, Grameta'
    }
  };

  return (
    <>
      <SEO 
        title={seoContent[currentLang].title}
        description={seoContent[currentLang].description}
        keywords={seoContent[currentLang].keywords}
        image="/cnc-parts-collection.jpg"
      />
      <Layout>
      <section className="bg-gradient-to-b from-[#F9FBFF] to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3 inline-block">{content[currentLang].badge}</span>
            <h1 className="text-h1 tracking-tight mb-4">{content[currentLang].title}</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              {content[currentLang].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group h-full bg-[#FAFBFC] border-[#E6EAF0] rounded-2xl transition-transform transition-shadow duration-300 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <CardHeader className="text-left p-6 md:p-8 pb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#016dfe] mb-5 transition-colors duration-300 group-hover:bg-[#DCEBFF]">
                    {service.icon}
                  </div>
                  <CardTitle className="text-[18px] md:text-[20px] font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-[#4A4A4A] leading-[1.6] text-sm md:text-base">
                    {service.description}
                  </p>
                  <p className="mt-4 text-[12px] tracking-wide uppercase text-[#6C6C6C]">{service.badge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default Services;