import { areas } from '../data/areas';
import type { Faq } from '../data/services';
import { services, type ServicePage } from '../data/services';
import { site } from '../config/site';

const sameAs = [site.social.linkedin, site.social.googleBusiness].filter(Boolean);

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;
const businessId = `${site.url}/#business`;

const address = {
  '@type': 'PostalAddress',
  addressLocality: site.location.locality,
  addressRegion: site.location.region,
  addressCountry: site.location.country,
};

const areaServed = areas.map((area) => ({
  '@type': 'City',
  name: area.city,
  containedInPlace: {
    '@type': 'State',
    name: site.location.regionName,
  },
}));

function serviceId(slug: string) {
  return `${site.url}/services/${slug}/#service`;
}

export function serviceNode(service: ServicePage) {
  return {
    '@type': 'Service',
    '@id': serviceId(service.slug),
    name: service.schemaName,
    serviceType: service.schemaName,
    url: `${site.url}/services/${service.slug}/`,
    description: service.description,
    provider: { '@id': businessId },
    areaServed,
  };
}

function faqNode(faqs: readonly Faq[], id: string) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Person, website, and the Lake Elsinore practice. No street address is published. */
export function identityJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        jobTitle: site.jobTitle,
        url: `${site.url}/`,
        image: new URL(site.defaultOgImage, site.url).href,
        email: `mailto:${site.email}`,
        telephone: site.phoneHref,
        address,
        areaServed,
        knowsAbout: services.map((service) => service.schemaName),
        sameAs,
        worksFor: { '@id': businessId },
      },
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: `${site.name} — Web design, local SEO, and social media`,
        url: `${site.url}/`,
        image: new URL(site.defaultOgImage, site.url).href,
        description: site.description,
        email: site.email,
        telephone: site.phoneHref,
        address,
        areaServed,
        sameAs,
        provider: { '@id': personId },
        serviceType: services.map((service) => service.schemaName),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: serviceNode(service),
          })),
        },
      },
    ],
  };
}

export function faqPageJsonLd(faqs: readonly Faq[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    ...faqNode(faqs, `${pageUrl}#faq`),
  };
}

export function servicePageJsonLd(service: ServicePage) {
  const url = `${site.url}/services/${service.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      serviceNode(service),
      faqNode(service.faqs, `${url}#faq`),
      breadcrumbNode([
        { name: 'Home', url: `${site.url}/` },
        { name: 'Services', url: `${site.url}/services/` },
        { name: service.label, url },
      ]),
    ],
  };
}

export function areaPageJsonLd(area: {
  slug: string;
  city: string;
  heading: string;
  description: string;
  faqs: readonly Faq[];
}) {
  const url = `${site.url}/areas/${area.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: area.heading,
        description: area.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        inLanguage: site.locale,
      },
      faqNode(area.faqs, `${url}#faq`),
      breadcrumbNode([
        { name: 'Home', url: `${site.url}/` },
        { name: 'Areas', url: `${site.url}/areas/` },
        { name: area.city, url },
      ]),
    ],
  };
}

export function collectionJsonLd(page: {
  path: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  const url = `${site.url}${page.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        url,
        name: page.name,
        description: page.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        inLanguage: site.locale,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: page.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        },
      },
    ],
  };
}

export function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog/#blog`,
    name: `Blog | ${site.name}`,
    description: site.blogDescription,
    url: `${site.url}/blog/`,
    inLanguage: site.locale,
    author: { '@id': personId },
    publisher: { '@id': personId },
  };
}

export function blogPostingJsonLd(entry: {
  id: string;
  title: string;
  description: string;
  date: Date;
}) {
  const url = `${site.url}/blog/${entry.id}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: entry.title,
    description: entry.description,
    datePublished: entry.date.toISOString(),
    author: { '@id': personId },
    publisher: { '@id': personId },
    mainEntityOfPage: url,
    url,
    image: new URL(site.defaultOgImage, site.url).href,
    inLanguage: site.locale,
  };
}
