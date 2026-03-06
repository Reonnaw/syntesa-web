import { SITE_META } from "~/constants/site_meta";

export interface PageSeoOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  ogType?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CourseItem {
  name: string;
  description: string;
  provider?: string;
  duration?: string;
  topics?: string[];
}

export interface ItemListEntry {
  name: string;
  url?: string;
  description?: string;
}

export function generateMeta({
  title,
  description,
  path = "",
  ogImage,
  keywords,
  ogType = "website",
}: PageSeoOptions = {}) {
  const pageTitle = title ?? SITE_META.title;
  const pageDescription = description ?? SITE_META.description;
  const pageUrl = `${SITE_META.siteUrl}${path}`;
  const pageOgImage = ogImage ?? SITE_META.ogImage;
  const allKeywords = keywords ? [...SITE_META.keywords, ...keywords] : SITE_META.keywords;

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "keywords", content: allKeywords.join(", ") },

    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: ogType },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: pageOgImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: pageTitle },
    { property: "og:site_name", content: SITE_META.siteName },
    { property: "og:locale", content: SITE_META.locale },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE_META.twitterHandle },
    { name: "twitter:creator", content: SITE_META.twitterHandle },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: pageOgImage },
    { name: "twitter:image:alt", content: pageTitle },
  ];
}

export function generateSecurityMeta() {
  return [
    { name: "referrer", content: "strict-origin-when-cross-origin" },
    { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
  ];
}

export function generateLinks(path = "") {
  const pageUrl = `${SITE_META.siteUrl}${path}`;
  return [{ rel: "canonical", href: pageUrl }];
}

export function generatePreconnectLinks() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous" as const,
    },
    { rel: "dns-prefetch", href: "https://discord.gg" },
    { rel: "dns-prefetch", href: "https://github.com" },
  ];
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_META.siteName,
    alternateName: "Software Engineering Lab UNESA",
    url: SITE_META.siteUrl,
    logo: `${SITE_META.siteUrl}/favicon.ico`,
    description: SITE_META.description,
    email: SITE_META.email,
    sameAs: [SITE_META.social.github, SITE_META.social.instagram, SITE_META.social.discord],
    address: {
      "@type": "PostalAddress",
      streetAddress: "A10 Building, 3rd Floor, Room 3 & 4",
      addressLocality: "Surabaya",
      addressRegion: "East Java",
      addressCountry: "ID",
    },
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Negeri Surabaya",
      alternateName: "UNESA",
      url: "https://unesa.ac.id",
    },
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_META.siteUrl}${item.path}`,
    })),
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_META.siteName,
    url: SITE_META.siteUrl,
  };
}

export function generateFaqJsonLd(faqItems: FaqItem[]) {
  if (!faqItems.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateCourseJsonLd(courses: CourseItem[]) {
  if (!courses.length) return null;

  return courses.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: course.provider ?? SITE_META.siteName,
      url: SITE_META.siteUrl,
    },
    ...(course.duration && { timeRequired: course.duration }),
    ...(course.topics?.length && {
      syllabusSections: course.topics.map((topic, i) => ({
        "@type": "Syllabus",
        position: i + 1,
        name: topic,
      })),
    }),
  }));
}

export function generateItemListJsonLd(items: ItemListEntry[], listName: string) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url && { url: item.url }),
      ...(item.description && { description: item.description }),
    })),
  };
}

export function mergeJsonLd(...schemas: (object | null | undefined)[]) {
  return schemas.filter(Boolean);
}
