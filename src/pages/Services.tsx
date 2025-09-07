import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, RotateCcw, Package, FileText, CheckCircle, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const services = [
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
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#F9FBFF] to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3 inline-block">Mūsų teikiamos</span>
            <h1 className="text-h1 tracking-tight mb-4">Paslaugos</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              Atliekame CNC frezavimo ir tekinimo darbus pagal jūsų brėžinius.
              Dirbame su plienu, aliuminiu, bronza ir techniniais plastikais.
              Užtikriname tikslumą ir patikimumą mažoms bei vidutinėms serijoms.
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
  );
};

export default Services;