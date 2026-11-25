import { areas } from './areas';
import type { Faq } from './services';
import { services } from './services';

export const localOffer = {
  index: '04',
  label: 'Services / Lake Elsinore',
  heading: 'Websites, search, and social. Same person.',
  intro:
    'Hire the design and the build, the local search setup, or the social posting. They can be separate. When you hire more than one, the offer, the city, and the next step stay the same.',
};

export const homeFaqs = [
  {
    question: 'Who is Nate Martinez?',
    answer:
      'Nate Martinez is a web designer and full-stack developer in Lake Elsinore, California. He also sets up local SEO and manages social media. The same person does the design, the code, and the marketing.',
  },
  {
    question: 'Where do you work?',
    answer:
      'The practice is based in Lake Elsinore and serves Temecula, Murrieta, Menifee, Wildomar, and Corona. Remote projects elsewhere in the United States are still possible. There is no published street address.',
  },
  {
    question: 'What can I hire you for?',
    answer:
      'Web design and development, local SEO, and social media management. Each service has its own page describing what is included and how an engagement works.',
  },
  {
    question: 'Do you guarantee the top spot on Google?',
    answer:
      'No. Local SEO covers the Google Business Profile, the pages people search for, and the technical setup. A position is not something this practice promises.',
  },
  {
    question: 'How do I start?',
    answer:
      'Use the form with what you are trying to make, what is not working, and which city the business serves. You can also call (949) 335-2555 or email nrd.martinezz@gmail.com.',
  },
] as const satisfies readonly Faq[];

export const serviceLinks = services.map((service) => ({
  href: `/services/${service.slug}/`,
  label: service.label,
  title: service.heading,
  text: service.description,
}));

export const areaLinks = areas.map((area) => ({
  href: `/areas/${area.slug}/`,
  label: area.city,
  title: area.heading,
  text: area.description,
}));
