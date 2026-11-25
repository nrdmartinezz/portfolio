import { projects } from './projects';

export interface Faq {
  question: string;
  answer: string;
}

export interface ProofItem {
  title: string;
  href: string;
  body: string;
}

export interface TextBlock {
  title: string;
  body: string;
}

export interface ServicePage {
  slug: 'web-development' | 'local-seo' | 'social-media';
  schemaName: string;
  label: string;
  title: string;
  description: string;
  kicker: string;
  heading: string;
  answer: string;
  included: readonly TextBlock[];
  steps: readonly string[];
  proof: readonly ProofItem[];
  faqs: readonly Faq[];
}

export const services = [
  {
    slug: 'web-development',
    schemaName: 'Web design and development',
    label: 'Web development',
    title: 'Web design and development in Lake Elsinore — Nate Martinez',
    description:
      'Nate Martinez designs and builds websites for businesses in Lake Elsinore and southwest Riverside County. One person takes the work from the first conversation through launch.',
    kicker: 'Web development',
    heading: 'Web design and development in Lake Elsinore',
    answer:
      'Nate Martinez designs and builds websites for businesses in Lake Elsinore and southwest Riverside County. One person takes the work from the first conversation through the interface, the code, hosting, and launch.',
    included: [
      {
        title: 'Pages and paths',
        body: 'The pages, the order of the story, and what a visitor should do next are settled before the build gets crowded.',
      },
      {
        title: 'Interface design',
        body: 'The interface comes from the brand and the content. It is not a template with the colors swapped.',
      },
      {
        title: 'Build and launch',
        body: 'Frontend, server-side work, integrations, hosting, testing, and launch stay with the same person who designed the site.',
      },
      {
        title: 'A page search and social can use',
        body: 'The site names the offer, the city, and a way to make contact, so later SEO and social work have somewhere honest to point.',
      },
    ],
    steps: [
      'You send the messy version: what you are trying to make, what is not working, and what a better result would look like.',
      'We sort the pages and the next step a visitor should take.',
      'I design the interface and build it, including hosting and launch.',
      'After launch I fix the things that only show up once the site is in use.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A practice site rebuilt so the doctors, the technology, and booking a consultation are easy to find.',
      },
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'A multi-location practice organized around finding an office first, with the practice story kept consistent from one location page to the next.',
      },
      {
        title: projects.kirkco.title,
        href: projects.kirkco.href,
        body: 'A product site rebuilt around the way engineers and purchasing teams look for technical information.',
      },
    ],
    faqs: [
      {
        question: 'Do you start from a template?',
        answer:
          'No. The interface comes from the brand, the content, and whatever a visitor needs to do next.',
      },
      {
        question: 'Can you rebuild a site I already have?',
        answer:
          'Yes. Some projects are new builds. Others are a structure or a path through the site that needs to be redone.',
      },
      {
        question: 'What kinds of sites are in the published work?',
        answer:
          'Orthodontic and chiropractic practice sites, a multi-location practice, and an industrial product site. That is evidence of the build, not a limit on the next client.',
      },
      {
        question: 'Do you only work in Lake Elsinore?',
        answer:
          'The practice is based in Lake Elsinore. Web development engagements also cover Temecula, Murrieta, Menifee, Wildomar, and Corona.',
      },
    ],
  },
  {
    slug: 'local-seo',
    schemaName: 'Local SEO',
    label: 'Local SEO',
    title: 'Local SEO in Lake Elsinore and southwest Riverside County — Nate Martinez',
    description:
      'Nate Martinez sets up local SEO for businesses in Lake Elsinore, Temecula, Murrieta, Menifee, Wildomar, and Corona. The work covers the Google profile, the pages, and the technical setup. Rankings are not guaranteed.',
    kicker: 'Local SEO',
    heading: 'Local SEO for southwest Riverside County',
    answer:
      'Nate Martinez sets up local SEO for businesses in Lake Elsinore, Temecula, Murrieta, Menifee, Wildomar, and Corona. The work covers the Google Business Profile, the pages people search for, and the technical setup that lets those pages be understood. Rankings are not guaranteed.',
    included: [
      {
        title: 'Google Business Profile',
        body: 'Categories, the service area, and a name, phone, and city that match the website. You keep ownership of the profile.',
      },
      {
        title: 'Pages that answer the search',
        body: 'Service and city pages written for the way people ask, with the offer and the city in the first paragraph.',
      },
      {
        title: 'On-page and structured data',
        body: 'Titles, descriptions, internal links, and schema that describe the same business the visible page describes.',
      },
      {
        title: 'Technical setup',
        body: 'Indexation, canonicals, the sitemap, and obvious speed problems. This is the foundation, not a promise of a position.',
      },
    ],
    steps: [
      'We look at the site, the Google profile, and the cities you actually serve.',
      'I align the name, phone, city, and offer so the site and the profile say the same thing.',
      'I write or revise the pages that should answer those searches.',
      'You get a short account of what changed. I do not promise a ranking.',
    ],
    proof: [
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'Location pages were organized so each office could be found without the practice story changing from city to city. That is site structure, not a ranking claim.',
      },
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'The practice, the doctors, and the consultation path sit where a visitor expects them. Search setup needs a page that already explains the business.',
      },
    ],
    faqs: [
      {
        question: 'Do you guarantee first place on Google?',
        answer:
          'No. Anyone who guarantees a specific position by a specific date is not describing how local search works.',
      },
      {
        question: 'Do I need a new website first?',
        answer:
          'Not always. If the current site cannot explain the offer or carry a service page, the SEO work starts by fixing that.',
      },
      {
        question: 'Will you own my Google Business Profile?',
        answer: 'No. You keep the profile, the domain, and the analytics accounts.',
      },
      {
        question: 'Which cities does this cover?',
        answer:
          'Lake Elsinore, Temecula, Murrieta, Menifee, Wildomar, and Corona. The practice is based in Lake Elsinore.',
      },
    ],
  },
  {
    slug: 'social-media',
    schemaName: 'Social media management',
    label: 'Social media',
    title: 'Social media management in Lake Elsinore — Nate Martinez',
    description:
      'Nate Martinez manages social media for local businesses in Lake Elsinore and nearby cities, and points each post at the same offer as the website.',
    kicker: 'Social media',
    heading: 'Social media management tied to the website',
    answer:
      'Nate Martinez manages social media for local businesses in Lake Elsinore, Temecula, Murrieta, Menifee, Wildomar, and Corona. Posts use the same offer, city, and next step as the website, so the public story does not split between a page and a feed.',
    included: [
      {
        title: 'A cadence you can keep',
        body: 'A monthly set of posts for the networks the business already uses, most often Instagram and Facebook.',
      },
      {
        title: 'Words from the real offer',
        body: 'Posts are written from the services, the city, and the work you want seen. They are not a generic content calendar.',
      },
      {
        title: 'Profiles that match the site',
        body: 'Name, city, phone, and link are checked against the website so a visitor does not land on two different versions of the business.',
      },
      {
        title: 'A path off the post',
        body: 'Each post points at a specific page that can take a call or a message, not only the homepage.',
      },
    ],
    steps: [
      'We pick the networks you will actually keep access to.',
      'I draft a month of posts from the offer, the city, and the page they should land on.',
      'You approve the posts before anything goes out.',
      'Published posts link to that page. If the page does not exist yet, we build it first.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A practice homepage already explains who the doctors are and how to book. Social posts need a page like that to land on.',
      },
      {
        title: projects.kirkco.title,
        href: projects.kirkco.href,
        body: 'Technical buyers need a product hierarchy, not a slogan. Social for a company like this points at the product page, not a generic feed.',
      },
    ],
    faqs: [
      {
        question: 'Which networks do you manage?',
        answer:
          'Instagram and Facebook for most local businesses. Other networks only if you already have an audience there.',
      },
      {
        question: 'Do you run ads?',
        answer:
          'No. This service is organic posting and profile details that match the website. Paid ads are a separate kind of work.',
      },
      {
        question: 'Can social start before the site is ready?',
        answer:
          'The posts need a page to land on. If that page does not exist, the page comes first.',
      },
      {
        question: 'Who approves what gets published?',
        answer: 'You do, before it goes out.',
      },
    ],
  },
] as const satisfies readonly ServicePage[];

export type ServiceSlug = (typeof services)[number]['slug'];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
