import { ARTICLES } from "@/data/articles";
import { COURSES } from "@/data/courses";
import { FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";

/** https://schema.org/Organization */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    email: SITE.email,
    sameAs: [SITE.facebook],
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    knowsLanguage: ["th"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      availableLanguage: ["Thai"],
      url: SITE.facebook,
    },
  };
}

/** https://schema.org/WebSite */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "th-TH",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** https://schema.org/FAQPage — mirrors the visible accordion exactly. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** https://schema.org/ItemList — the featured article rail. */
export function articleListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/#featured-articles`,
    name: "บทความแนะนำ",
    itemListElement: ARTICLES.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      description: article.description,
      url: `${SITE.url}/articles/${article.slug}`,
    })),
  };
}

/** https://schema.org/BreadcrumbList */
export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: SITE.url,
      },
    ],
  };
}

/** https://schema.org/ItemList of Products — the books & courses on offer. */
export function courseListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/#courses`,
    name: "หนังสือและคอร์สเตรียมสอบ ก.พ.",
    itemListElement: COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: course.title,
        description: course.description,
        image: `${SITE.url}${course.image}`,
        brand: { "@id": `${SITE.url}/#organization` },
        offers: {
          "@type": "Offer",
          price: course.price,
          priceCurrency: "THB",
          availability: "https://schema.org/InStock",
          url: SITE.facebook,
        },
      },
    })),
  };
}

