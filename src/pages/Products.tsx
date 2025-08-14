import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

// Import product images
import aluminumHousing from '@/assets/products/aluminum-housing-m12.jpg';
import precisionShaft from '@/assets/products/precision-shaft-16.jpg';
import electronicsBracket from '@/assets/products/electronics-bracket.jpg';
import bronzeBushing from '@/assets/products/bronze-bushing.jpg';
import steelFlange from '@/assets/products/steel-flange-pn16.jpg';
import medicalFastener from '@/assets/products/medical-fastener.jpg';
import pomSpacer from '@/assets/products/pom-spacer.jpg';
import anodizedCover from '@/assets/products/anodized-cover.jpg';
import stainlessPin from '@/assets/products/stainless-pin.jpg';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Visi');

  const categories = ['Visi', 'Mašinų pramonė', 'Medicina', 'Statybos', 'Elektronika'];

  const products = [
    {
      id: 1,
      name: 'Frez. aliuminio korpusas M12',
      category: 'Mašinų pramonė',
      image: aluminumHousing,
      alt: 'Frezavimo būdu pagamintas aliuminio korpusas M12 sriegiais'
    },
    {
      id: 2,
      name: 'Tikslioji ašis Ø16',
      category: 'Mašinų pramonė',
      image: precisionShaft,
      alt: 'Tikslioji tekinimo būdu pagaminta ašis skersmens Ø16'
    },
    {
      id: 3,
      name: 'Laikiklis elektronikos moduliui',
      category: 'Elektronika',
      image: electronicsBracket,
      alt: 'CNC apdirbtas laikiklis elektronikos moduliui'
    },
    {
      id: 4,
      name: 'Bronzos įvorė su grioveliu',
      category: 'Mašinų pramonė',
      image: bronzeBushing,
      alt: 'Bronzinė įvorė su tepimo grioveliu'
    },
    {
      id: 5,
      name: 'Plieno flanšas PN16',
      category: 'Statybos',
      image: steelFlange,
      alt: 'Plieninis flanšas PN16 su tvirtinimo skylėmis'
    },
    {
      id: 6,
      name: 'Medicininė tvirtinimo detalė',
      category: 'Medicina',
      image: medicalFastener,
      alt: 'Smulki medicininė detalė su precizišku paviršiumi'
    },
    {
      id: 7,
      name: 'Plastiko tarpiklis POM',
      category: 'Elektronika',
      image: pomSpacer,
      alt: 'POM plastiko tarpiklis elektronikos įrenginiui'
    },
    {
      id: 8,
      name: 'Aliuminio dangtelis anod.',
      category: 'Elektronika',
      image: anodizedCover,
      alt: 'Anoduotas aliuminio dangtelis su švariais briaunų užapvalinimais'
    },
    {
      id: 9,
      name: 'Nerūd. plieno kaištis',
      category: 'Mašinų pramonė',
      image: stainlessPin,
      alt: 'Nerūdijančio plieno kaištis su fazuotomis briaunomis'
    }
  ];

  const filteredProducts = activeFilter === 'Visi' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Mašinų pramonė': 'bg-blue-100 text-blue-800',
      'Medicina': 'bg-green-100 text-green-800',
      'Statybos': 'bg-orange-100 text-orange-800',
      'Elektronika': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-h1 mb-6">Mūsų produktai</h1>
            <p className="text-body text-text-secondary">
              Aukštos kokybės gaminiai iš skirtingų pramonės sričių. 
              Filtruokite pagal kategoriją ir peržiūrėkite detalių pavyzdžius.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category ? "btn-primary" : "btn-secondary"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="image-gallery mb-4">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <Badge className={getCategoryColor(product.category)}>
                    {product.category}
                  </Badge>
                </div>
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