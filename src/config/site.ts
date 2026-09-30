/**
 * Site-wide config. Blank optional values ship nothing.
 * `url` must match `site` in astro.config.mjs, with no trailing slash.
 * `formEndpoint` stays blank: Firebase Hosting does not run the starter's PHP handler.
 */

export interface SiteConfig {
  url: string;
  name: string;
  tagline: string;
  description: string;
  locale: string;
  email: string;
  phone: string;
  phoneHref: string;
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
  tagline: 'Design, code, launch. Same person throughout.',
  description:
    'Portfolio of Nate Martinez, a web designer, full-stack developer, and UX/UI specialist creating clear, capable digital experiences.',
  locale: 'en-US',
  email: 'nrd.martinezz@gmail.com',
  phone: '(949) 335-2555',
  phoneHref: '+19493352555',
  formEndpoint: '',
  defaultOgImage: '/images/portfolio-hero-image.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/nathanael-delgado/',
  },
};
