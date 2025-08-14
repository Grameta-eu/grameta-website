import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import cncLatheImage from '@/assets/cnc-lathe-operation.jpg';

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 text-center mb-12">Apie mus</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <p className="text-body text-text-secondary">
                  UAB „Grameta" — jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo 
                  paslaugas Lietuvos bei užsienio rinkoms. Įmonė turi technologines galimybes 
                  įvykdyti užsakymus programinio valdymo staklėmis bei pagaminti tikslius gaminius 
                  ir konstrukcines detales iš anglinio, legiruoto, nerūdijančio plieno, aliuminio, 
                  bronzos ar plastiko.
                </p>
                
                <p className="text-body text-text-secondary">
                  Turimi įrengimai leidžia greitai ir lanksčiai įvykdyti mažų bei vidutinių serijų 
                  užsakymus. Pagrindinės gamybos sritys:
                </p>
              </div>
              
              <div className="image-gallery">
                <img
                  src={cncLatheImage}
                  alt="UAB Grameta CNC staklės gamyboje"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {[
                  'Mašinų pramonė',
                  'Medicina',
                  'Statybos pramonė',
                  'Elektronika'
                ].map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-body">{industry}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-background-subtle p-6 rounded-lg">
                <p className="text-body text-text-secondary mb-4">
                  Domina gamyba pagal jūsų brėžinius?
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/kontaktai">Susisiekite</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;