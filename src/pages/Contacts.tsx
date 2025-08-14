import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Contacts = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-h1 mb-6">Kontaktai</h1>
            <p className="text-body text-text-secondary">
              Atsiųskite brėžinius arba aprašykite poreikį — parengsime pasiūlymą.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-h3">UAB „Grameta"</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">El. paštas</p>
                      <a 
                        href="mailto:info@grameta.lt" 
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        info@grameta.lt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Telefonas</p>
                      <a 
                        href="tel:+37000000000" 
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        +370 000 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Adresas</p>
                      <p className="text-text-secondary">
                        Gamybos g. 1<br />
                        LT-00000, Lietuva
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Darbo laikas</p>
                      <p className="text-text-secondary">
                        I–V 8:00–17:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-h3">Užklausos forma</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Vardas</Label>
                      <Input id="name" placeholder="Jūsų vardas" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Įmonė</Label>
                      <Input id="company" placeholder="Įmonės pavadinimas" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">El. paštas</Label>
                      <Input id="email" type="email" placeholder="jusu@email.lt" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonas</Label>
                      <Input id="phone" type="tel" placeholder="+370 000 00000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tema</Label>
                    <Input id="subject" placeholder="Užklausos tema" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Žinutė</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Aprašykite savo poreikius, pridėkite brėžinius..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    Siųsti užklausą
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;