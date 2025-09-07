import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-[#D9E7FF] rounded-2xl px-6 py-12 md:px-10 md:py-14 text-center">
          <h3 className="text-h3 text-accent text-[clamp(2.0625rem,3.75vw,2.625rem)]">Turite brėžinius ar klausimų?</h3>
          <p className="text-body text-text-secondary max-w-2xl mx-auto mt-4">
            Atsiųskite užklausą — pasiūlysime greitą ir aiškią sąmatą.
          </p>
          <div className="mt-6">
            <Button asChild className="btn-primary">
              <Link to="/kontaktai">Gauti pasiūlymą</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


