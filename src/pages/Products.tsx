import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { products as allProducts, categories as allCategories } from '@/data/products';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Visi');

  const categories = allCategories;
  const products = allProducts;

  const filteredProducts = activeFilter === 'Visi'
    ? products
    : products.filter(product => product.category === activeFilter);


  

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">Aukštos kokybės gaminiai</div>
            <h1 className="text-h1 tracking-tight mb-4">Mūsų produktai</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              Aukštos kokybės gaminiai iš skirtingų pramonės sričių. Filtruokite pagal kategoriją ir peržiūrėkite detalių pavyzdžius.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="mt-12 flex flex-col items-center mb-12">

          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E6EAF0] rounded-2xl p-4 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="relative mb-4">
                  <div className="h-[180px] w-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] text-center line-clamp-2">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-text-secondary">
                Šioje kategorijoje produktų nėra.
              </p>
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Products;