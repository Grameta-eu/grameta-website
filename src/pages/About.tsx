import { Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import cncLatheImage from '@/assets/cnc-lathe-operation.jpg';

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-[1180px] mx-auto">
            {/* Heading block */}
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3 inline-block">Kas mes esame</span>
              <h1 className="text-h1 tracking-tight mb-4">Apie mus</h1>
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
                      UAB „Grameta" — jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo paslaugas Lietuvos bei užsienio rinkoms.
                    </p>
                    <p className="text-body">
                      Įmonė turi technologines galimybes įvykdyti užsakymus programinio valdymo staklėmis bei pagaminti tikslius gaminius ir konstrukcines detales iš anglinio, legiruoto, nerūdijančio plieno, aliuminio, bronzos ar plastiko.
                    </p>
                    <p className="text-body">
                      Turimi įrengimai leidžia greitai ir lanksčiai įvykdyti mažų bei vidutinių serijų užsakymus. Pagrindinės gamybos sritys:
                    </p>
                  </div>

                  {/* Bullets - 2 columns desktop, 1 column mobile */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      'Mašinų pramonė',
                      'Medicina',
                      'Statybos pramonė',
                      'Elektronika',
                    ].map((industry, index) => (
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
  );
};

export default About;