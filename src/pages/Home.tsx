import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Heart, Building, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { products } from '@/data/products';
import { NumberTicker } from '@/components/magicui/number-ticker';

// Import images
import heroImage from '@/assets/cnc-hero-image.jpg';
import partsCollection from '@/assets/cnc-parts-collection.jpg';
import cncLatheImage from '@/assets/cnc-lathe-operation.jpg';

const Home = () => {
  return (
    <Layout overlayHeader>
      {/* Hero Section - full viewport height with internal offset for fixed header */}
      <section className="relative min-h-[112svh] md:h-[100svh] overflow-visible md:overflow-hidden flex flex-col pt-[4.5rem] md:pt-[6.75rem] pb-12 md:pb-6 bg-white">
        {/* Copy */}
        <div className="flex-1 flex items-center order-2 md:order-1">
          <div className="container-custom relative z-10">
            <div className="w-full text-center space-y-5 md:space-y-6 text-text-primary relative z-10">
              {/* Desktop logo above heading */}
              <div className="hidden lg:flex justify-center">
                <img src="/grameta.webp" alt="Grameta" className="h-44 xl:h-52 2xl:h-60 w-auto" />
              </div>
              <h1 className="text-h1 text-[clamp(1.8rem,6.5vw,2.6rem)] md:text-[clamp(2.5rem,6vw,4rem)] leading-[1.1]">Metalo apdirbimas CNC tekinimo ir frezavimo staklėmis</h1>
              {/* Mobile image between heading and subheading */}
              <div className="block md:hidden w-full px-4">
                <div className="image-gallery rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto h-40">
                  <img
                    src={heroImage}
                    alt="CNC frezavimo procesas — detalė tvirtinimo įrenginyje"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-body text-text-primary max-w-3xl mx-auto px-4 md:px-0">
                Gaminame aukšto tikslumo detales mažoms ir vidutinėms serijoms. Dirbame
                su plienu, nerūdijančiu plienu, aliuminiu, bronza ir plastiku.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
                <Button asChild className="bg-accent/100 backdrop-blur-sm border border-accent/20 text-white hover:bg-accent hover:text-white h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-lg">
                  <Link to="/kontaktai">Gauti pasiūlymą</Link>
                </Button>
                <Button asChild className="bg-white text-accent border border-accent/20 hover:bg-white/90 hover:text-accent h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-lg">
                  <Link to="/produktai">
                    Peržiūrėti mūsų darbus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom image */}
        <div className="hidden md:block w-full px-4 pb-6 order-1 md:order-2 relative z-10">
          <div className="image-gallery rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto h-48 md:h-64 lg:h-[20rem]">
            <img
              src={heroImage}
              alt="CNC frezavimo procesas — detalė tvirtinimo įrenginyje"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Gradient background layer, starts lower so it doesn't affect top content */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[85%] md:h-3/4 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--accent))_100%)]"></div>
      </section>

      {/* Industry Applications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:flex md:items-baseline md:justify-between mb-10 md:mb-12 gap-6 md:gap-8">
            <h3 className="text-h2 !font-medium m-0">Pagrindinės gamybos sritys</h3>
            <p className="text-body text-text-secondary md:text-right md:w-[40%] lg:w-[40%] m-0">
            Turimi įrengimai leidžia greitai ir lanksčiai įvykdyti mažų bei vidutinių serijų užsakymus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-8">
            <Card className="card-elegant card-elegant-accent p-8 md:p-10 bg-[#F3F4F6] text-center">
              <CardContent className="space-y-3 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Settings className="h-6 w-6" />
                </div>
                <h4 className="text-h3 font-semibold">Mašinų pramonė</h4>
                <p className="text-body text-text-secondary">
                  Tikslūs komponentai ir mazgai mechaninėms sistemoms.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant card-elegant-accent p-8 md:p-10 bg-[#F3F4F6] text-center">
              <CardContent className="space-y-3 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Heart className="h-6 w-6" />
                </div>
                <h4 className="text-h3 font-semibold">Medicina</h4>
                <p className="text-body text-text-secondary">
                  Smulkios tolerancijos, švarūs paviršiai, dokumentacija.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant card-elegant-accent p-8 md:p-10 bg-[#F3F4F6] text-center">
              <CardContent className="space-y-3 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Building className="h-6 w-6" />
                </div>
                <h4 className="text-h3 font-semibold">Statybos pramonė</h4>
                <p className="text-body text-text-secondary">
                  Tvirti elementai įrangai ir tvirtinimams.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant card-elegant-accent p-8 md:p-10 bg-[#F3F4F6] text-center">
              <CardContent className="space-y-3 p-0">
                <div className="icon-accent mx-auto w-fit">
                  <Cpu className="h-6 w-6" />
                </div>
                <h4 className="text-h3 font-semibold">Elektronika</h4>
                <p className="text-body text-text-secondary">
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
            <div className="image-gallery image-gallery-accent">
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
      <section className="section-padding bg-white">
          <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4 text-black">Mūsų pagaminti produktai</h2>
            <p className="text-body text-text-secondary">
              Pamatykite keletą mūsų pagamintų produktų.
            </p>
          </div>

          {/* Auto-sliding carousel with same visual style as grid */}
          {(() => {
            const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
            const autoplayRef = useRef<number | null>(null);
            const containerRef = useRef<HTMLDivElement | null>(null);
            const [isInView, setIsInView] = useState(false);
            const start = () => {
              if (!carouselApi) return;
              if (autoplayRef.current) window.clearInterval(autoplayRef.current);
              autoplayRef.current = window.setInterval(() => {
                carouselApi.scrollNext();
              }, 2500);
            };
            const stop = () => {
              if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current);
                autoplayRef.current = null;
              }
            };
            useEffect(() => {
              const element = containerRef.current;
              if (!element) return;
              const observer = new IntersectionObserver(
                (entries) => {
                  const entry = entries[0];
                  setIsInView(entry.isIntersecting);
                },
                { root: null, threshold: 0.2 }
              );
              observer.observe(element);
              return () => {
                observer.disconnect();
              };
            }, []);

            useEffect(() => {
              if (!carouselApi) return;
              if (isInView) {
                start();
              } else {
                stop();
              }
              return () => {
                stop();
              };
            }, [carouselApi, isInView]);

            return (
              <div ref={containerRef} onMouseEnter={stop} onMouseLeave={() => { if (isInView) start(); }} className="relative mb-8">
                <Carousel setApi={setCarouselApi} opts={{ align: 'start', loop: true }}>
                  <CarouselContent>
                    {products.map((product) => (
                      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                        <div className="image-gallery image-gallery-flat group cursor-pointer">
                          <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            );
          })()}

          <div className="text-center">
            <Button asChild className="bg-accent text-white hover:bg-accent/90 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-lg">
              <Link to="/produktai">
                Peržiūrėti visus produktus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="section-padding bg-background-subtle">
        <div className="mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="rounded-[20px] bg-[#F6FAFF] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 shadow-none md:shadow-[0_10px_30px_rgba(1,109,254,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              {/* Image - 6/12 */}
              <div className="md:col-span-6 order-1">
                <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] h-full">
                  <img
                    src={cncLatheImage}
                    alt="UAB Grameta CNC staklės gamyboje"
                    className="w-full h-full md:h-[360px] lg:h-[420px] object-cover"
                  />
                </div>
              </div>
              {/* Copy - 6/12 */}
              <div className="md:col-span-6 order-2 flex flex-col justify-center">
                <div className="space-y-5">
                  <h2 className="font-bold leading-tight text-[clamp(28px,3vw,40px)] tracking-[-0.01em]">Trumpai apie mus</h2>
                  <div className="space-y-4">
                    <p className="text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-[#4A4A4A] max-w-[65ch]">
                      UAB „Grameta" — jauna ir perspektyvi įmonė, teikianti CNC frezavimo ir tekinimo paslaugas Lietuvos bei užsienio rinkoms.
                    </p>
                    <p className="text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-[#4A4A4A] max-w-[65ch]">
                      Lanksčiai įvykdome mažų ir vidutinių serijų užsakymus, užtikrindami tikslumą ir terminus.
                    </p>
                  </div>
                  {/* Strengths 2x2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[52ch]">
                    {[
                      'CNC frezavimas ir tekinimas',
                      '±0.01 mm tikslumas',
                      'Greita gamyba',
                      'Nerūdijančio plieno apdirbimas',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[15px] text-[#243B53]">
                        <CheckCircle className="h-4 w-4 text-[#016DFE]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTAs */}
                  <div className="flex items-center gap-5 pt-2">
                    <Button asChild className="h-12 px-6 bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md">
                      <Link to="/apie">
                        Plačiau apie mus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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

export default Home;