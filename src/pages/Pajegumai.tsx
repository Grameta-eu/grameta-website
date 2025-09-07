import Layout from '@/components/layout/Layout';

const Pajegumai = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">Mūsų pajėgumai</div>
            <h1 className="text-h1 tracking-tight mb-4">Galimybės</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              Čia rasite informaciją apie mūsų technologinius pajėgumus, įrangą ir procesus.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 1"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 2"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 3"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="image-gallery rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Pajėgumų nuotrauka 4"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pajegumai;


