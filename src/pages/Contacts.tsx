import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Contacts = () => {
  return (
    <Layout showCTA={false}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">Susisiekite su mumis</p>
            <h1 className="text-h1 tracking-tight mb-4">Kontaktai</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              Atsiųskite brėžinius arba aprašykite poreikį — parengsime pasiūlymą.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Contact Information */}
            <div className="space-y-6 h-full">
              <Card className="bg-white border border-[#E6EAF0] rounded-2xl h-full overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-h3">UAB „Grameta"</CardTitle>
                </CardHeader>
                <CardContent className="h-full flex flex-col space-y-8 p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E6F0FF] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#016dfe]" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">El. paštas</p>
                      <a
                        href="mailto:cnctekinimas@gmail.com"
                        className="text-accent hover:text-accent-hover transition-colors font-medium"
                      >
                        cnctekinimas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E6F0FF] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#016dfe]" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">Telefonas</p>
                      <a
                        href="tel:+37065778272"
                        className="text-accent hover:text-accent-hover transition-colors font-medium"
                      >
                        +370 (657) 78 272
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E6F0FF] flex items-center justify-center mt-1">
                      <MapPin className="h-5 w-5 text-[#016dfe]" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">Adresas</p>
                      <p className="text-text-secondary">
                        Vandžiogalos pl. 106G<br />
                        Domeikava, 54358 Kauno r. sav.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mt-auto">
                    <div className="h-10 w-10 rounded-full bg-[#E6F0FF] flex items-center justify-center mt-1">
                      <Clock className="h-5 w-5 text-[#016dfe]" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">Darbo laikas</p>
                      <p className="text-text-secondary">I–V 8:00–17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="bg-white border border-[#E6EAF0] rounded-2xl h-full flex flex-col overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-semibold">Mūsų lokacija</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex-1">
                <div className="w-full h-[260px] md:h-[320px] lg:h-[350px] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Grameta%20Vandžiogalos%20pl.%20106G,%20Domeikava,%2054358%20Kauno%20r.%20sav.&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="UAB Grameta lokacija"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;