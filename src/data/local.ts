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
      'I’m Nate, a web designer and full-stack developer based in Lake Elsinore. I design and build websites, and I also help businesses with local SEO and social media. If we work together, you’ll talk directly with me about the work.',
  },
  {
    question: 'Where do you work?',
    answer:
      'I’m based in Lake Elsinore and work with businesses in Temecula, Murrieta, Menifee, Wildomar, and Corona. I’m also open to remote projects elsewhere in the United States.',
  },
  {
    question: 'What can I hire you for?',
    answer:
      'You can hire me for web design and development, local SEO, or social media management. We can focus on one service or talk through how they fit together.',
  },
  {
    question: 'Do you guarantee the top spot on Google?',
    answer:
      'No. I can improve the pages, business information, and technical setup that support local search, but I can’t promise a particular ranking.',
  },
  {
    question: 'How do I start?',
    answer:
      'Send me the messy version: what you’re trying to make, what isn’t working, and where your business serves customers. Use the contact form or email me at nrd.martinezz@gmail.com. You can also call me at (949) 335-2555.',
  },
] as const satisfies readonly Faq[];

export const serviceLinks = services.map((service) => ({
  href: `/services/${service.slug}/`,
  label: service.label,
  title: service.heading,
  text: service.card,
}));

export const areaLinks = areas.map((area) => ({
  href: `/areas/${area.slug}/`,
  label: area.city,
  title: area.heading,
  text: area.card,
}));
