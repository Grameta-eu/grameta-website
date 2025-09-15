import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/grameta.webp',
  type = 'website',
  noindex = false 
}: SEOProps) => {
  const location = useLocation();
  
  // Detect current language from path
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    return 'lt';
  };

  const currentLang = getCurrentLanguage();
  const baseUrl = 'https://grameta.lt'; // Replace with your actual domain
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Default SEO content for each language
  const defaultContent = {
    lt: {
      siteName: 'Grameta - CNC frezavimas ir tekinimas',
      title: 'Grameta - CNC frezavimas ir tekinimas | Tikslūs metalų apdirbimo sprendimai',
      description: 'UAB Grameta - CNC frezavimo ir tekinimo paslaugos Lietuvoje. Tikslūs metalų apdirbimo sprendimai mažoms ir vidutinėms serijoms. Dirbame su plienu, aliuminiu, bronza ir plastikas.',
      keywords: 'CNC frezavimas, CNC tekinimas, metalo apdirbimas, tikslūs komponentai, prototipai, gamyba, plienas, aliuminis, bronza, plastikas, Lietuva'
    },
    en: {
      siteName: 'Grameta - CNC Milling and Turning',
      title: 'Grameta - CNC Milling and Turning | Precision Metal Machining Solutions',
      description: 'UAB Grameta - CNC milling and turning services in Lithuania. Precision metal machining solutions for small and medium series. We work with steel, aluminum, bronze and plastics.',
      keywords: 'CNC milling, CNC turning, metal machining, precision components, prototypes, manufacturing, steel, aluminum, bronze, plastics, Lithuania'
    }
  };

  // Use provided title/description or fall back to defaults
  const seoTitle = title || defaultContent[currentLang].title;
  const seoDescription = description || defaultContent[currentLang].description;
  const seoKeywords = keywords || defaultContent[currentLang].keywords;

  // Generate alternate URLs for hreflang
  const getAlternateUrl = (lang: string) => {
    if (lang === 'lt') {
      // Convert English path to Lithuanian
      if (location.pathname === '/en') return `${baseUrl}/`;
      if (location.pathname === '/en/about') return `${baseUrl}/apie`;
      if (location.pathname === '/en/services') return `${baseUrl}/paslaugos`;
      if (location.pathname === '/en/products') return `${baseUrl}/produktai`;
      if (location.pathname === '/en/capabilities') return `${baseUrl}/pajegumai`;
      if (location.pathname === '/en/contact') return `${baseUrl}/kontaktai`;
      return `${baseUrl}/`;
    } else {
      // Convert Lithuanian path to English
      if (location.pathname === '/') return `${baseUrl}/en`;
      if (location.pathname === '/apie') return `${baseUrl}/en/about`;
      if (location.pathname === '/paslaugos') return `${baseUrl}/en/services`;
      if (location.pathname === '/produktai') return `${baseUrl}/en/products`;
      if (location.pathname === '/pajegumai') return `${baseUrl}/en/capabilities`;
      if (location.pathname === '/kontaktai') return `${baseUrl}/en/contact`;
      return `${baseUrl}/en`;
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UAB Grameta",
    "description": currentLang === 'lt' 
      ? "CNC frezavimo ir tekinimo paslaugos Lietuvoje"
      : "CNC milling and turning services in Lithuania",
    "url": baseUrl,
    "logo": `${baseUrl}/grameta.webp`,
    "image": `${baseUrl}${image}`,
    "telephone": "+37065778272",
    "email": "cnctekinimas@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vandžiogalos pl. 106G",
      "addressLocality": "Domeikava",
      "postalCode": "54358",
      "addressRegion": "Kauno r. sav.",
      "addressCountry": "LT"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+37065778272",
      "contactType": "customer service",
      "email": "cnctekinimas@gmail.com"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="UAB Grameta" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#016DFE" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="lt" href={getAlternateUrl('lt')} />
      <link rel="alternate" hrefLang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl('lt')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={defaultContent[currentLang].siteName} />
      <meta property="og:locale" content={currentLang === 'lt' ? 'lt_LT' : 'en_GB'} />
      <meta property="og:locale:alternate" content={currentLang === 'lt' ? 'en_GB' : 'lt_LT'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="LT" />
      <meta name="geo.placename" content="Lithuania" />
      <meta name="geo.position" content="54.9027;23.9384" />
      <meta name="ICBM" content="54.9027, 23.9384" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
