import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

const Contacts = () => {
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
      badge: "Susisiekite su mumis",
      title: "Kontaktai",
      subtitle: "Atsiųskite brėžinius arba aprašykite poreikį — parengsime pasiūlymą.",
      companyName: "UAB \"Grameta\"",
      email: "El. paštas",
      phone: "Telefonas",
      address: "Adresas",
      workingHours: "Darbo laikas",
      workingTime: "I–V 8:00–17:00",
      locationTitle: "Mūsų lokacija"
    },
    en: {
      badge: "Get in Touch",
      title: "Contact",
      subtitle: "Send us your drawings or describe your requirements — we’ll prepare a proposal.",
      companyName: "UAB \"Grameta\"",
      email: "Email",
      phone: "Phone",
      address: "Address",
      workingHours: "Working hours",
      workingTime: "Mon–Fri 8:00–17:00",
      locationTitle: "Our location"
    }
  };

  // SEO content for contacts page
  const seoContent = {
    lt: {
      title: 'Kontaktai - Grameta | Susisiekite dėl CNC frezavimo ir tekinimo',
      description: 'Susisiekite su UAB Grameta CNC frezavimo ir tekinimo paslaugų klausimais. Mūsų kontaktai, darbo laikas ir lokacija Domeikavoje.',
      keywords: 'Grameta kontaktai, CNC paslaugos, susisiekti, Domeikava, darbo laikas, telefonas, el. paštas'
    },
    en: {
      title: 'Contact - Grameta | Get in Touch for CNC Milling and Turning',
      description: 'Contact UAB Grameta for CNC milling and turning services inquiries. Our contacts, working hours and location in Domeikava.',
      keywords: 'Grameta contact, CNC services, get in touch, Domeikava, working hours, phone, email'
    }
  };

  return (
    <>
      <SEO 
        title={seoContent[currentLang].title}
        description={seoContent[currentLang].description}
        keywords={seoContent[currentLang].keywords}
        image="/grameta.webp"
      />
      <Layout showCTA={false}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">{content[currentLang].badge}</p>
            <h1 className="text-h1 tracking-tight mb-4">{content[currentLang].title}</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              {content[currentLang].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Contact Information */}
            <div className="space-y-6 h-full">
              <Card className="bg-white border border-[#E6EAF0] rounded-2xl h-full overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-h3">{content[currentLang].companyName}</CardTitle>
                </CardHeader>
                <CardContent className="h-full flex flex-col space-y-8 p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#E6F0FF] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#016dfe]" />
                    </div>
                    <div className="leading-relaxed">
                      <p className="font-semibold">{content[currentLang].email}</p>
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
                      <p className="font-semibold">{content[currentLang].phone}</p>
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
                      <p className="font-semibold">{content[currentLang].address}</p>
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
                      <p className="font-semibold">{content[currentLang].workingHours}</p>
                      <p className="text-text-secondary">{content[currentLang].workingTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="bg-white border border-[#E6EAF0] rounded-2xl h-full flex flex-col overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-semibold">{content[currentLang].locationTitle}</CardTitle>
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
    </>
  );
};

export default Contacts;