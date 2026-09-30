/**
 * Site-wide config. Blank optional values ship nothing.
 * `url` must match `site` in astro.config.mjs, with no trailing slash.
 * `formEndpoint` stays blank: Firebase Hosting does not run the starter's PHP handler.
 */

export interface SiteConfig {
  url: string;
  name: string;
  /** Default document title for the home page. */
  title: string;
  tagline: string;
  description: string;
  locale: string;
  email: string;
  phone: string;
  phoneHref: string;
  jobTitle: string;
  location: {
    locality: string;
    region: string;
    regionName: string;
    country: string;
    countryName: string;
  };
  /** Relative form endpoint. Blank disables forms. */
  formEndpoint: string;
  defaultOgImage: string;
  social: {
    linkedin?: string;
  };
}

export const site: SiteConfig = {
  url: 'https://webnrd.me',
  name: 'Nate Martinez',
  title: 'Nate Martinez — Web Designer & Full-stack Developer',
  tagline: 'Design, code, launch. Same person throughout.',
  description:
    'I design and build websites for teams with a lot to explain. Based in Lake Elsinore, California, and open to remote projects across the United States.',
  locale: 'en-US',
  email: 'nrd.martinezz@gmail.com',
  phone: '(949) 335-2555',
  phoneHref: '+19493352555',
  jobTitle: 'Web Designer and Full-stack Developer',
  location: {
    locality: 'Lake Elsinore',
    region: 'CA',
    regionName: 'California',
    country: 'US',
    countryName: 'United States',
  },
  formEndpoint: '',
  defaultOgImage: '/images/portfolio-hero-image.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/nathanael-delgado/',
  },
};
