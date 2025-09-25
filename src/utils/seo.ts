// SEO utilities for Optica Regina Elena

export const SEO_CONSTANTS = {
  SITE_NAME: 'Óptica Regina Elena',
  BUSINESS_NAME: 'Óptica Regina Elena - Hospital Italiano',
  CITY: 'Córdoba',
  STATE: 'Córdoba',
  COUNTRY: 'Argentina',
  ADDRESS: 'Roma 535, X5004 BAK, Córdoba, Argentina',
  PHONE: '+54-351-357-0864',
  EMAIL: 'opticaregina@gmail.com',
  WEBSITE: 'https://opticareginaelena.com.ar',
  ESTABLISHED: '2004',
  KEYWORDS: [
    'óptica córdoba',
    'lentes córdoba',
    'anteojos córdoba',
    'hospital italiano',
    'regina elena',
    'gafas córdoba argentina',
    'óptica centro córdoba',
    'lentes recetados',
    'anteojos de sol',
    'obras sociales',
    'salud visual córdoba',
    'optometría córdoba',
    'examen visual',
    'cristales oftálmicos',
    'monturas córdoba'
  ]
};

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SEO_CONSTANTS.WEBSITE,
  "name": SEO_CONSTANTS.SITE_NAME,
  "description": `${SEO_CONSTANTS.BUSINESS_NAME} - Más de 20 años de experiencia en salud visual en ${SEO_CONSTANTS.CITY}, Argentina.`,
  "url": SEO_CONSTANTS.WEBSITE,
  "telephone": SEO_CONSTANTS.PHONE,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Roma 535",
    "addressLocality": SEO_CONSTANTS.CITY,
    "addressRegion": SEO_CONSTANTS.STATE,
    "postalCode": "X5004",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -31.409607,
    "longitude": -64.167536
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:30",
      "closes": "12:30"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "currenciesAccepted": "ARS",
  "areaServed": {
    "@type": "City",
    "name": SEO_CONSTANTS.CITY,
    "containedInPlace": {
      "@type": "State",
      "name": SEO_CONSTANTS.STATE
    }
  },
  "serviceType": ["Optometry", "Eyeglasses", "Contact Lenses", "Eye Exams"],
  "parentOrganization": {
    "@type": "Hospital",
    "name": "Hospital Italiano de Córdoba"
  },
  "sameAs": [
    "https://farmaciashospitalitaliano.com.ar/optica-regina-elena/",
    "https://www.instagram.com/opticareginaelena",
    "https://www.facebook.com/OpticaReginaElena/",
    "https://wa.me/5493513570864"
  ]
});

export const generateMetaTags = (pageTitle?: string, pageDescription?: string) => {
  const title = pageTitle || `${SEO_CONSTANTS.SITE_NAME} - Lentes y Anteojos en ${SEO_CONSTANTS.CITY} | Hospital Italiano`;
  const description = pageDescription || `${SEO_CONSTANTS.SITE_NAME} en ${SEO_CONSTANTS.CITY}, Argentina. Más de 20 años de experiencia en lentes, anteojos y salud visual. Parte del Hospital Italiano. Prueba virtual 3D, obras sociales y entrega rápida.`;

  return {
    title,
    description,
    keywords: SEO_CONSTANTS.KEYWORDS.join(', '),
    canonical: SEO_CONSTANTS.WEBSITE,
    openGraph: {
      type: 'website',
      url: SEO_CONSTANTS.WEBSITE,
      title,
      description,
      siteName: SEO_CONSTANTS.SITE_NAME,
      locale: 'es_AR',
      images: [
        {
          url: `${SEO_CONSTANTS.WEBSITE}/banner-2.avif`,
          width: 1200,
          height: 630,
          alt: `${SEO_CONSTANTS.SITE_NAME} - Anteojos y Lentes en ${SEO_CONSTANTS.CITY}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SEO_CONSTANTS.WEBSITE}/banner-2.avif`]
    }
  };
};

// Performance optimization helpers
export const imageOptimization = {
  // Critical images that should load immediately
  critical: ['/banner-2.avif', '/logo.avif'],

  // Non-critical images that can lazy load
  lazy: [
    '/urbanas.avif',
    '/glasses/minimalist.avif',
    '/glasses/vintage.avif',
    '/review_1.avif',
    '/review_2.avif',
    '/review_3.avif',
    '/review_4.avif',
    '/review_5.avif',
    '/ig_1.avif',
    '/ig_2.avif',
    '/ig_3.avif',
    '/fb_1.avif',
    '/fb_2.avif',
    '/fb_3.avif',
    '/wsp.avif'
  ]
};
