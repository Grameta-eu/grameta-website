import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { products as allProducts, categories as allCategories } from '@/data/products';
import SEO from '@/components/SEO';

const Products = () => {
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
      badge: "Aukštos kokybės gaminiai",
      title: "Mūsų produktai",
      subtitle: "Aukštos kokybės gaminiai iš skirtingų pramonės sričių. Filtruokite pagal kategoriją ir peržiūrėkite detalių pavyzdžius.",
      noProducts: "Šioje kategorijoje produktų nėra."
    },
    en: {
      badge: "High-Quality Products",
      title: "Our products",
      subtitle: "High-quality components from various industries. Filter by category and browse sample parts.",
      noProducts: "There are no products in this category."
    }
  };

  const [activeFilter, setActiveFilter] = useState(currentLang === 'en' ? 'All' : 'Visi');

  const categories = allCategories;
  const products = allProducts;

  const filteredProducts = activeFilter === 'Visi' || activeFilter === 'All'
    ? products
    : products.filter(product => product.category === activeFilter);

  // SEO content for products page
  const seoContent = {
    lt: {
      title: 'Mūsų produktai - Grameta | CNC pagaminti komponentai ir detalės',
      description: 'Peržiūrėkite UAB Grameta pagamintų CNC komponentų ir detalių pavyzdžius. Aukštos kokybės gaminiai iš skirtingų pramonės sričių.',
      keywords: 'CNC produktai, pagaminti komponentai, metalo detalės, tikslūs gaminiai, CNC pavyzdžiai, Grameta produktai'
    },
    en: {
      title: 'Our Products - Grameta | CNC Manufactured Components and Parts',
      description: 'Browse examples of CNC components and parts manufactured by UAB Grameta. High-quality products from various industries.',
      keywords: 'CNC products, manufactured components, metal parts, precision products, CNC examples, Grameta products'
    }
  };

  return (
    <>
      <SEO 
        title={seoContent[currentLang].title}
        description={seoContent[currentLang].description}
        keywords={seoContent[currentLang].keywords}
        image="/products/DSC_1031_.webp"
      />
      <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#016dfe] mb-3">{content[currentLang].badge}</div>
            <h1 className="text-h1 tracking-tight mb-4">{content[currentLang].title}</h1>
            <p className="text-body text-text-secondary max-w-[720px] mx-auto">
              {content[currentLang].subtitle}
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
                {content[currentLang].noProducts}
              </p>
            </div>
          )}
        </div>
      </section>

      </Layout>
    </>
  );
};

export default Products;