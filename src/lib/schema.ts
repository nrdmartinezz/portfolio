import { site } from '../config/site';

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;
const businessId = `${site.url}/#business`;

const address = {
  '@type': 'PostalAddress',
  addressLocality: site.location.locality,
  addressRegion: site.location.region,
  addressCountry: site.location.country,
};

const areaServed = [
  {
    '@type': 'City',
    name: site.location.locality,
    containedInPlace: {
      '@type': 'State',
      name: site.location.regionName,
    },
  },
  {
    '@type': 'Country',
    name: site.location.countryName,
  },
];

/** Person, website, and remote-capable practice. No street address is published. */
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
        sameAs: [site.social.linkedin].filter(Boolean),
      },
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: `${site.name} — Web design and development`,
        url: `${site.url}/`,
        image: new URL(site.defaultOgImage, site.url).href,
        description: site.description,
        email: site.email,
        telephone: site.phoneHref,
        address,
        areaServed,
        provider: { '@id': personId },
        serviceType: ['Web design', 'UX design', 'Full-stack web development'],
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
    description:
      'Notes on designing and building websites, from Nate Martinez in Lake Elsinore, California.',
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
