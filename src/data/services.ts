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
  card: string;
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
    title: 'Web Design & Development in Lake Elsinore | Nate Martinez',
    description:
      'I design and build websites for businesses in Lake Elsinore and southwest Riverside County, from the first conversation through launch.',
    card: 'I design and build websites around your business and the people who use them. From the first conversation to the code and launch, you work with the person doing the work.',
    kicker: 'Web development',
    heading: 'Web design and development in Lake Elsinore',
    answer:
      'I design and build websites for businesses in Lake Elsinore and throughout southwest Riverside County. I can help you sort out the pages and content, design an interface that fits your business, and carry the work through development and launch.',
    included: [
      {
        title: 'Page structure and user paths',
        body: 'I help decide what belongs on each page and what you want a visitor to do next.',
      },
      {
        title: 'Interface design',
        body: 'I design around your brand, your content, and the people who will use the site.',
      },
      {
        title: 'Development and launch',
        body: 'I handle the frontend, backend work and integrations the project needs, along with hosting, testing, and launch as agreed in the project scope.',
      },
      {
        title: 'A foundation for search and social',
        body: 'I make sure the site explains what you offer and gives visitors a clear way to get in touch.',
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
          'I don’t start by picking a template and swapping the colors. I start with your brand, your content, and what visitors need to do, then design the interface around those needs.',
      },
      {
        question: 'Can you rebuild a site I already have?',
        answer:
          'Yes. I can build a new site or work through a rebuild when the existing structure, design, or visitor path isn’t doing its job.',
      },
      {
        question: 'What kinds of websites have you worked on?',
        answer:
          'My published work includes orthodontic and chiropractic practice sites, a multi-location practice, and an industrial product site. Those projects show how I approach different kinds of content; they aren’t a limit on who I work with.',
      },
      {
        question: 'Do you only work in Lake Elsinore?',
        answer:
          'No. I’m based in Lake Elsinore and also work with businesses in Temecula, Murrieta, Menifee, Wildomar, and Corona. I’m open to remote projects elsewhere in the United States, too.',
      },
    ],
  },
  {
    slug: 'local-seo',
    schemaName: 'Local SEO',
    label: 'Local SEO',
    title: 'Local SEO in Lake Elsinore | Nate Martinez',
    description:
      'I help local businesses improve website content, business information, and technical search foundations—without promising rankings.',
    card: 'I help local businesses make their services easier to understand and find. That can include your Google Business Profile, website content, and technical search setup. I don’t guarantee rankings.',
    kicker: 'Local SEO',
    heading: 'Local SEO for Lake Elsinore and southwest Riverside County',
    answer:
      'I help businesses make their services and locations clearer to people searching online. That work can include your Google Business Profile, the content on your site, and the technical setup behind it. I’ll be clear about what I change, and I won’t promise a specific ranking.',
    included: [
      {
        title: 'Google Business Profile',
        body: 'I help review the profile details and the areas your business actually serves. You keep ownership of your profile.',
      },
      {
        title: 'Service and location content',
        body: 'I write or revise pages so they explain the service and the area accurately, without inventing local details.',
      },
      {
        title: 'On-page and structured data',
        body: 'I review titles, descriptions, internal links, and structured data so they reflect the business and match the visible content.',
      },
      {
        title: 'Technical foundation',
        body: 'I review items such as indexing, canonical URLs, the sitemap, and obvious speed issues. The exact work depends on the site and project scope.',
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
          'No. Search results change, and no one can guarantee a particular position. I focus on improving the business information, content, and technical foundation that support visibility.',
      },
      {
        question: 'Do I need a new website first?',
        answer:
          'Not necessarily. I’ll look at what you already have. If the site makes it hard to understand your offer or add a useful service page, we can address that before—or alongside—the SEO work.',
      },
      {
        question: 'Will you own my Google Business Profile?',
        answer:
          'No. You keep ownership of your Google Business Profile, domain, and analytics accounts. I can work with the access needed for the project.',
      },
      {
        question: 'Which cities do you serve?',
        answer:
          'I’m based in Lake Elsinore and work with businesses in Lake Elsinore, Temecula, Murrieta, Menifee, Wildomar, and Corona.',
      },
    ],
  },
  {
    slug: 'social-media',
    schemaName: 'Social media management',
    label: 'Social media',
    title: 'Social Media Management in Lake Elsinore | Nate Martinez',
    description:
      'I create organic social content for local businesses and connect posts and profiles to a useful next step on their websites.',
    card: 'I create organic social content that connects back to what your business actually offers—and gives people a clear next step on your website.',
    kicker: 'Social media',
    heading: 'Social media management that connects to your website',
    answer:
      'I help local businesses keep their social media connected to the services they actually offer. The goal is a consistent story across your profiles and website, with a useful next step for the people who find you.',
    included: [
      {
        title: 'A manageable posting plan',
        body: 'I plan a monthly set of posts for the networks that make sense for your business.',
      },
      {
        title: 'Content grounded in your offer',
        body: 'I write about your services and the work you want people to see, rather than filling a generic calendar.',
      },
      {
        title: 'Consistent profiles',
        body: 'I check that your business information and links align with your website.',
      },
      {
        title: 'A clear next step',
        body: 'When it makes sense, I direct people to the relevant page, not just a generic homepage.',
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
          'I focus on Instagram and Facebook for most local businesses. If you already have an audience on another network, we can talk about whether it fits the project.',
      },
      {
        question: 'Do you run ads?',
        answer:
          'No. This service focuses on organic posts and profile information. Paid advertising is separate from the work described here.',
      },
      {
        question: 'Can social media start before my website is ready?',
        answer:
          'It can, but I want people who find your posts to have a useful place to go. If you need a landing page for the offer, we can work on that first.',
      },
      {
        question: 'Who approves what gets published?',
        answer: 'You do. I’ll share the posts with you for approval before they go out.',
      },
    ],
  },
] as const satisfies readonly ServicePage[];

export type ServiceSlug = (typeof services)[number]['slug'];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
