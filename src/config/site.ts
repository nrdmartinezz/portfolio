/**
 * Site-wide config. Blank optional values ship nothing.
 * `url` must match `site` in astro.config.mjs, with no trailing slash.
 * `formEndpoint` is the Hosting rewrite that calls the contact function.
 */

export interface SiteConfig {
  url: string;
  name: string;
  /** Default document title for the home page. */
  title: string;
  tagline: string;
  description: string;
  /** Blog index description. Used as the visible intro, meta description, schema, and feed text. */
  blogDescription: string;
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
    googleBusiness?: string;
  };
}

export const site: SiteConfig = {
  url: 'https://webnrd.me',
  name: 'Nate Martinez',
  title: 'Nate Martinez | Web Designer & Developer in Lake Elsinore',
  tagline: 'Design, code, launch. Same person throughout.',
  description:
    'I’m Nate, a Lake Elsinore web designer and developer. I build websites and help businesses connect them to local SEO and social media.',
  blogDescription:
    'Notes on designing and building websites from Nate Martinez in Lake Elsinore, California, including how a brief becomes a site a visitor can use.',
  locale: 'en-US',
  email: 'nrd.martinezz@gmail.com',
  phone: '(949) 335-2555',
  phoneHref: '+19493352555',
  jobTitle: 'Web designer and full-stack developer',
  location: {
    locality: 'Lake Elsinore',
    region: 'CA',
    regionName: 'California',
    country: 'US',
    countryName: 'United States',
  },
  formEndpoint: '/api/contact/',
  defaultOgImage: '/images/portfolio-hero-image.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/nathanael-delgado/',
    googleBusiness: 'https://www.google.com/maps/place/NRD+Design/data=!4m2!3m1!1s/g/11_1qp9lcn',
  },
};
