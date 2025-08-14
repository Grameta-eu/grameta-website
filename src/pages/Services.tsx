import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, RotateCcw, Package, FileText, CheckCircle, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CNC frezavimas",
      description: "3 ašių frezavimas, tikslūs paviršiai ir geometrija, prototipai ir serijos.",
      badge: "Medžiagos: plienas, aliuminis, bronza, plastikas"
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "CNC tekinimas",
      description: "Detalių tekinimas nuo vienetinių iki vidutinių kiekių, stabilūs tolerancijų rezultatai.",
      badge: "Skersmenys pagal poreikį (pagal brėžinį)"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Medžiagų parinkimas ir tiekimas",
      description: "Padedame parinkti tinkamą lydinį ir ruošinį ekonomiškam gamybos ciklui.",
      badge: "Plienai, spalvotieji metalai, plastikai"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Brėžinių peržiūra ir konsultacijos",
      description: "Patikriname gamybines galimybes, rekomenduojame tolerancijas ir paviršiaus apdirbimą.",
      badge: "STEP, DXF, DWG, PDF"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Kokybės kontrolė",
      description: "Matavimai pagal poreikį, atsekamumas, patikrinimo ataskaitos susitarus.",
      badge: "Dokumentacija pagal užklausą"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Surinkimas ir pakuotė",
      description: "Bazinis komponentų surinkimas ir saugi pakuotė transportui.",
      badge: "Pagal projektą"
    }
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-h1 mb-6">Paslaugos</h1>
            <p className="text-body text-text-secondary">
              Atliekame CNC frezavimo ir tekinimo darbus pagal jūsų brėžinius. 
              Dirbame su plienu, aliuminiu, bronza ir techniniais plastikūs. 
              Užtikriname tikslumą ir patikimumą mažoms bei vidutinėms serijoms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader className="text-center pb-4">
                  <div className="icon-accent mx-auto w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-h3 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-body text-text-secondary text-sm">
                    {service.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-background-subtle p-8 rounded-lg">
            <h3 className="text-h3 mb-4">Turite konkretų brėžinį?</h3>
            <Button asChild className="btn-primary">
              <Link to="/kontaktai">Atsiųsti užklausą</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;