export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CGM Care",
  "description": "Get your CGM and diabetic supplies covered by your insurance. Medicare Part B and select PPOs supported.",
  "url": "https://cgmcare.com",
  "logo": "https://cgmcare.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-CGM-CARE",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Healthcare Ave, Suite 100",
    "addressLocality": "Medical City",
    "addressRegion": "MC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://facebook.com/cgmcare",
    "https://twitter.com/cgmcare",
    "https://linkedin.com/company/cgmcare"
  ]
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "CGM Care",
  "description": "Medical device supplier specializing in continuous glucose monitors and diabetic supplies",
  "url": "https://cgmcare.com",
  "medicalSpecialty": "Endocrinology",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Diabetic Supplies",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Continuous Glucose Monitors",
          "description": "CGM devices for diabetes management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Diabetic Supplies",
          "description": "Test strips, lancets, and monitoring supplies"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I qualify under Medicare Part B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part B covers CGM for patients with diabetes who meet specific criteria, including insulin use and frequent blood glucose monitoring. We verify your eligibility and handle all paperwork."
      }
    },
    {
      "@type": "Question",
      "name": "What if my PPO requires prior authorization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle all prior authorization paperwork for you. Our team works directly with your insurance company and doctor to get approval quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most approvals are processed within 1-3 business days. We keep you updated throughout the entire process via your patient portal."
      }
    },
    {
      "@type": "Question",
      "name": "What if I'm not covered by insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer transparent cash-pay options with competitive pricing. HSA/FSA cards are accepted, and payment plans are available."
      }
    }
  ]
};

export const productSchema = (product: {
  name: string;
  description: string;
  price: string;
  brand?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": product.brand || "CGM Care"
  },
  "category": product.category || "Medical Device",
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "CGM Care"
    }
  }
});

export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-question", ".hero-title", ".step-title"]
  }
};
