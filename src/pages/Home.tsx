import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Heart, Building, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import images
import heroImage from '@/assets/cnc-hero-image.jpg';
import partsCollection from '@/assets/cnc-parts-collection.jpg';
import aluminumHousing from '@/assets/products/aluminum-housing-m12.jpg';
import precisionShaft from '@/assets/products/precision-shaft-16.jpg';
import electronicsBracket from '@/assets/products/electronics-bracket.jpg';
import bronzeBushing from '@/assets/products/bronze-bushing.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-background-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-h1">
                Tikslus CNC frezavimas ir tekinimas
              </h1>
              <p className="text-body text-text-secondary">
                Gaminame aukšto tikslumo detales mažoms ir vidutinėms serijoms. 
                Dirbame su plienu, nerūdijančiu plienu, aliuminiu, bronza ir plastiku.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/produktai">
                    Peržiūrėti mūsų darbus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="btn-secondary">
                  <Link to="/kontaktai">Gauti pasiūlymą</Link>
                </Button>
              </div>
            </div>
            <div className="lg:order-last">
              <div className="image-gallery">
                <img
                  src={heroImage}
                  alt="CNC frezavimo procesas — detalė tvirtinimo įrenginyje"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-h3 mb-4">Pritaikymas pramonėje</h3>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Lankstūs terminai ir griežti tikslumo standartai įvairioms šakoms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-elegant text-center p-6 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Settings className="h-6 w-6" />
                </div>
                <h4 className="text-h3 text-sm">Mašinų pramonė</h4>
                <p className="text-small text-text-secondary">
                  Tikslūs komponentai ir mazgai mechaninėms sistemoms.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Heart className="h-6 w-6" />
                </div>
                <h4 className="text-h3 text-sm">Medicina</h4>
                <p className="text-small text-text-secondary">
                  Smulkios tolerancijos, švarūs paviršiai, dokumentacija.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Building className="h-6 w-6" />
                </div>
                <h4 className="text-h3 text-sm">Statybos pramonė</h4>
                <p className="text-small text-text-secondary">
                  Tvirti elementai įrangai ir tvirtinimams.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Cpu className="h-6 w-6" />
                </div>
                <h4 className="text-h3 text-sm">Elektronika</h4>
                <p className="text-small text-text-secondary">
                  Korpuso detalės, laikikliai, tarpikliai, prototipai.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="section-padding bg-background-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-h2">Mūsų galimybės</h2>
              <div className="space-y-4">
                {[
                  'CNC frezavimas 3 ašių staklėmis',
                  'CNC tekinimas mažoms ir vidutinėms serijoms',
                  'Medžiagos: anglinis/legiruotas/nerūdijantis plienas, aliuminis, bronza, plastikai',
                  'Brėžinių priėmimas: STEP, DXF, DWG, PDF',
                  'Kokybės kontrolė ir matavimai pagal poreikį'
                ].map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-body">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-gallery">
              <img
                src={partsCollection}
                alt="Preciziškai pagaminti CNC komponentai iš įvairių medžiagų"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Darbo pavyzdžiai</h2>
            <p className="text-body text-text-secondary">
              Atrinkti projektai iš įvairių sričių.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="image-gallery group cursor-pointer">
              <img
                src={aluminumHousing}
                alt="Frezavimo būdu pagamintas aliuminio korpusas M12 sriegiais"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="image-gallery group cursor-pointer">
              <img
                src={precisionShaft}
                alt="Tikslioji tekinimo būdu pagaminta ašis skersmens Ø16"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="image-gallery group cursor-pointer">
              <img
                src={electronicsBracket}
                alt="CNC apdirbtas laikiklis elektronikos moduliui"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="image-gallery group cursor-pointer">
              <img
                src={bronzeBushing}
                alt="Bronzinė įvorė su tepimo grioveliu"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-primary">
              <Link to="/produktai">Visi produktai</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="section-padding bg-background-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-h2">Apie mus trumpai</h2>
            <p className="text-body text-text-secondary">
              UAB „Grameta" — jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo 
              paslaugas Lietuvos bei užsienio rinkoms. Lanksčiai įvykdome mažų ir vidutinių 
              serijų užsakymus.
            </p>
            <Button asChild className="btn-secondary">
              <Link to="/apie">
                Plačiau apie mus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="bg-background-subtle border-0 shadow-none">
            <CardContent className="text-center space-y-6 py-12">
              <h3 className="text-h3">Turite brėžinius ar klausimų?</h3>
              <p className="text-body text-text-secondary max-w-2xl mx-auto">
                Atsiųskite užklausą — pasiūlysime greitą ir aiškią sąmatą.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/kontaktai">Gauti pasiūlymą</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Home;