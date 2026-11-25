import type { Faq, ProofItem, TextBlock } from './services';
import { projects } from './projects';

export interface AreaPage {
  slug: 'lake-elsinore' | 'temecula' | 'murrieta' | 'menifee' | 'wildomar' | 'corona';
  city: string;
  title: string;
  description: string;
  card: string;
  kicker: string;
  heading: string;
  answer: string;
  local: readonly TextBlock[];
  steps: readonly string[];
  proof: readonly ProofItem[];
  faqs: readonly Faq[];
}

export const areas = [
  {
    slug: 'lake-elsinore',
    city: 'Lake Elsinore',
    title: 'Web Design & Local SEO in Lake Elsinore | Nate Martinez',
    description:
      'I’m based in Lake Elsinore and help local businesses with web design, development, local SEO, and social media.',
    card: 'I build websites and help local businesses connect their services to search and social.',
    kicker: 'Lake Elsinore',
    heading: 'Web design, SEO, and social media in Lake Elsinore',
    answer:
      'I’m based in Lake Elsinore and help businesses here with web design, development, local SEO, and social media. Whether someone needs to call, book, or understand a complicated service, I build the site around the next step that matters.',
    local: [
      {
        title: 'Downtown and the lakefront',
        body: 'Restaurants, shops, and services people look up before they drive over. The page has to say what you offer and how to visit or call, without making someone hunt for it.',
      },
      {
        title: 'Lakeland Village',
        body: 'An established west-side neighborhood. Practices and home-service companies here need a phone number and a city name that match the Google profile, not a regional page that only mentions the lake.',
      },
      {
        title: 'Tuscany Hills, Rosetta Canyon, Summerly, and Canyon Hills',
        body: 'Newer hillside tracts with their own household searches. A business that serves those tracts should say so, instead of hoping a downtown keyword covers the whole city.',
      },
    ],
    steps: [
      'We start with the part of Lake Elsinore you actually serve. Downtown and a hillside tract are not the same search.',
      'I build or revise the site so the offer, the phone, and the city are obvious on the first screen.',
      'Local SEO and social use that same city language, including the neighborhoods you want named.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A practice website where the doctors and the consultation path are easy to find. Useful as a model for a Lake Elsinore clinic, not as a claim that the practice is local.',
      },
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'Location pages kept a multi-office practice consistent. The same discipline applies when a Lake Elsinore business serves more than one neighborhood.',
      },
      {
        title: projects.kirkco.title,
        href: projects.kirkco.href,
        body: 'An industrial product site organized for buyers who already know the equipment. Relevant if the company has a lot to explain, wherever the buyer is.',
      },
    ],
    faqs: [
      {
        question: 'Are you based in Lake Elsinore?',
        answer:
          'Yes. I’m based in Lake Elsinore. I don’t publish a street address, so please get in touch before arranging a meeting.',
      },
      {
        question: 'Do you work with businesses throughout Lake Elsinore?',
        answer:
          'Yes. I work with businesses across the area. When we talk about local content, I’ll focus on the places your business actually serves rather than adding neighborhood names just to fill a page.',
      },
      {
        question: 'What kinds of Lake Elsinore businesses are a fit?',
        answer:
          'I can help practices, local services, shops, and businesses with a lot to explain. My published work includes orthodontic, chiropractic, and industrial sites; those examples are not a list of Lake Elsinore clients.',
      },
      {
        question: 'Can you also help with search and social?',
        answer:
          'Yes. I offer local SEO and social media management as separate services, and we can discuss how either one fits with your website.',
      },
    ],
  },
  {
    slug: 'temecula',
    city: 'Temecula',
    title: 'Web Design & Local SEO for Temecula | Nate Martinez',
    description:
      'I work with Temecula businesses on websites, local SEO, and social media from my base in nearby Lake Elsinore.',
    card: 'I help Temecula businesses make their offers clear and give visitors a useful next step.',
    kicker: 'Temecula',
    heading: 'Websites, search, and social for Temecula',
    answer:
      'I’m based in nearby Lake Elsinore and work with Temecula businesses on websites, local SEO, and social media. I’ll build around the way your customers find you and the action you want them to take.',
    local: [
      {
        title: 'Old Town',
        body: 'Restaurants, shops, and event businesses where the next step is a visit, a reservation, or a call. The page should make that step obvious to someone who is already in town.',
      },
      {
        title: 'Wine country',
        body: 'Tasting rooms and vendors whose traffic is visitors, not neighbors. Social posts and a booking path matter more here than a brochure that could belong to any city.',
      },
      {
        title: 'Residential Temecula',
        body: 'Practices and home services whose customers already live in Redhawk, Harveston, Paloma del Sol, and the surrounding tracts. Those pages should say Temecula plainly, not only “Southwest Riverside.”',
      },
    ],
    steps: [
      'We separate visitor businesses in Old Town and wine country from businesses that serve people who live in Temecula.',
      'The site gets a next step that matches that split: a visit, a booking, or a call.',
      'The Google profile and the social posts point at that same next step and name Temecula.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A consultation-first practice site. A useful model for a Temecula clinic whose patients need to find the doctor and book, not browse a slogan.',
      },
      {
        title: projects.kirkco.title,
        href: projects.kirkco.href,
        body: 'A technical catalog rebuilt around how buyers search. Relevant for Temecula companies whose offer is more specific than a storefront.',
      },
    ],
    faqs: [
      {
        question: 'Do you meet with clients in Temecula?',
        answer:
          'Yes. I can discuss in-person or remote meetings for Temecula projects. We’ll choose what works for the project.',
      },
      {
        question:
          'Would a visitor-focused business need a different website from a local service business?',
        answer:
          'Often, yes. A visitor-focused business may need to make booking or visiting easy, while a local service business may need to make its service area and contact options clear. I start with the customer’s goal rather than assuming one layout works for both.',
      },
      {
        question: 'Will you guarantee Temecula search rankings?',
        answer:
          'No. I can work on the pages, business profile, and technical setup, but I can’t promise a search position.',
      },
    ],
  },
  {
    slug: 'murrieta',
    city: 'Murrieta',
    title: 'Web Design & Local SEO for Murrieta | Nate Martinez',
    description:
      'I help Murrieta businesses design and build useful websites and connect them to local search and social media.',
    card: 'I work with Murrieta businesses from my base in Lake Elsinore, with the same person involved in design and development.',
    kicker: 'Murrieta',
    heading: 'An independent practice for Murrieta businesses',
    answer:
      'I work with Murrieta businesses from my base in Lake Elsinore. If your site needs a clearer structure, a fresh design, or a full rebuild, you’ll work directly with me on the project.',
    local: [
      {
        title: 'Professional practices',
        body: 'Clinics along the Murrieta corridors need the same clarity as the published orthodontic and chiropractic sites: who you are, where you are, and how to become a patient.',
      },
      {
        title: 'Local services leaving a template',
        body: 'A template package can name Murrieta in the footer and still fail to explain the offer. The replacement is a site written around the work you actually do.',
      },
      {
        title: 'One story across the site, the profile, and social',
        body: 'Murrieta businesses often split those three across vendors. Here they stay with one person, so the city, the phone, and the offer do not drift.',
      },
    ],
    steps: [
      'We look at what Murrieta customers are asked to do today, and where that path breaks.',
      'I design and build the site, or revise the pages that are doing the explaining.',
      'Search setup and social, if you want them, use the Murrieta name and the same next step as the site.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'Doctors, technology, and a consultation path on one practice site. The closest published model for a Murrieta clinic.',
      },
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'A multi-location practice kept consistent across offices. Useful when a Murrieta business is one location in a wider group.',
      },
    ],
    faqs: [
      {
        question: 'Can you work with my Murrieta business if you’re based in Lake Elsinore?',
        answer:
          'Yes. Murrieta is part of the area I serve. We can discuss whether an in-person or remote meeting is the best fit.',
      },
      {
        question: 'What is it like working with you instead of a larger agency?',
        answer:
          'You’ll work directly with me on the design and development. I’ll be clear about the project scope and any other contributors involved, so you know who is doing what.',
      },
      {
        question: 'Do you sell a standard template package?',
        answer:
          'I quote projects based on the work involved. I design around your business and its needs rather than starting with a standard template package.',
      },
    ],
  },
  {
    slug: 'menifee',
    city: 'Menifee',
    title: 'Web Design & Local SEO for Menifee | Nate Martinez',
    description:
      'I work with Menifee businesses on websites, local SEO, and social media from my base in Lake Elsinore.',
    card: 'I help Menifee businesses turn a confusing offer or an outdated site into something customers can use.',
    kicker: 'Menifee',
    heading: 'Websites and local search for Menifee',
    answer:
      'I help Menifee businesses with web design, local SEO, and social media from my base in Lake Elsinore. Whether you have an established site or are starting with a social profile, we can talk through the most useful next step.',
    local: [
      {
        title: 'Newer neighborhoods',
        body: 'A new subdivision does not inherit the search history of the older part of town. The page has to name Menifee and the service, or it competes as an unnamed regional vendor.',
      },
      {
        title: 'Home services',
        body: 'The useful version is a tap-to-call path, a service area you actually cover, and a Google profile in the same name as the site.',
      },
      {
        title: 'A first location',
        body: 'Practices opening in Menifee often start from a thin page or a social profile with no website. The site comes first, then the posts point at it.',
      },
    ],
    steps: [
      'We write down the Menifee services you want found, and the ones you do not offer.',
      'I build the site around that list, with a call or a form on the pages that matter.',
      'The profile and the social posts repeat the Menifee service area instead of a generic Inland Empire line.',
    ],
    proof: [
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A practice site with a clear consultation path. A model for a Menifee clinic that is still introducing itself.',
      },
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'Consistent location pages. Relevant if Menifee is one office and the brand also exists elsewhere.',
      },
    ],
    faqs: [
      {
        question: 'Can we meet in person for a Menifee project?',
        answer:
          'Yes. Menifee is in my service area. We can discuss an in-person or remote meeting when we talk about the project.',
      },
      {
        question: 'What if I only have a Facebook page?',
        answer:
          'That’s a starting point. If customers need more detail or a place to contact you, I can help you plan a website or landing page that works alongside the social profile.',
      },
      {
        question: 'Do you guarantee a Menifee map ranking?',
        answer:
          'No. I can help improve your website and Google Business Profile, but I can’t guarantee a particular map position.',
      },
    ],
  },
  {
    slug: 'wildomar',
    city: 'Wildomar',
    title: 'Web Design & Local SEO for Wildomar | Nate Martinez',
    description:
      'I help Wildomar businesses explain their services with useful websites, accurate local-search content, and social media.',
    card: 'I help Wildomar businesses explain where they work and what they offer—without inventing local claims.',
    kicker: 'Wildomar',
    heading: 'A Wildomar page, not a Murrieta footnote',
    answer:
      'I work with Wildomar businesses from nearby Lake Elsinore. I can help you build a useful website and describe your services and service area clearly, without making claims your business can’t support.',
    local: [
      {
        title: 'The city name itself',
        body: 'If the only mention of Wildomar is a bullet on a regional agency page, the business does not have a page of its own. I write the city into the page, the title, and the profile when that is accurate.',
      },
      {
        title: 'The corridor between Lake Elsinore and Murrieta',
        body: 'Shops, practices, and services along that stretch serve customers who search Wildomar specifically. The copy should say so, instead of borrowing the neighboring city’s landmarks.',
      },
      {
        title: 'Smaller local services',
        body: 'A short site can still be specific: what you do, where in Wildomar you work, and how to reach you. Length is not a substitute for that.',
      },
    ],
    steps: [
      'We confirm you serve Wildomar, rather than listing it because it sits between two larger cities.',
      'I put Wildomar in the page title, the opening paragraph, and the contact details.',
      'The Google profile uses the same city. Social posts link to the Wildomar page, not only the homepage.',
    ],
    proof: [
      {
        title: projects.myortho.title,
        href: projects.myortho.href,
        body: 'Each office got its own page instead of one statewide blur. That is the same reason a Wildomar business should not live only on a Murrieta page.',
      },
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A single-practice site with a clear next step. A fit for a Wildomar business that needs one strong explanation, not a dozen city clones.',
      },
    ],
    faqs: [
      {
        question: 'Why does naming Wildomar matter on my website?',
        answer:
          'If your business genuinely serves Wildomar, saying so helps visitors understand where you work. I’ll include location details where they are useful and accurate, rather than repeating city names for their own sake.',
      },
      {
        question: 'Are you nearby?',
        answer: 'Yes. I’m based in neighboring Lake Elsinore and work with businesses in Wildomar.',
      },
      {
        question: 'How do you approach local content for Wildomar?',
        answer:
          'I use information that reflects your actual services and service area. I won’t invent reviews, local clients, or a business location you don’t have.',
      },
    ],
  },
  {
    slug: 'corona',
    city: 'Corona',
    title: 'Web Design & Local SEO for Corona | Nate Martinez',
    description:
      'I help Corona businesses organize websites and connect their services to local search and social media.',
    card: 'I help Corona businesses organize websites, including offers that take a little more explanation.',
    kicker: 'Corona',
    heading: 'Web design and local marketing in Corona',
    answer:
      'I work with Corona businesses from my base in Lake Elsinore. If your offer involves technical products or several steps, I can help organize the site so visitors can find what they need.',
    local: [
      {
        title: 'The 91 corridor',
        body: 'Customers search Corona, not “Inland Empire,” when they want a company on this side of the county. The page should use the city they type.',
      },
      {
        title: 'Industrial and B2B offers',
        body: 'Kirkco is the published example of a product site organized for buyers who already understand the equipment. Corona has that kind of company: the hierarchy matters more than a slogan.',
      },
      {
        title: 'Practices and local services',
        body: 'A Corona practice still needs the plain version: who you treat, where you are, and how to book. Search and social then point at that page.',
      },
    ],
    steps: [
      'We decide whether the Corona customer is a local caller or a technical buyer. The page structure follows that, not a stock small-business layout.',
      'I design and build the site, with Corona named where the business actually serves Corona.',
      'Local SEO uses a matching Google profile. Social, if included, links to the specific Corona or product page.',
    ],
    proof: [
      {
        title: projects.kirkco.title,
        href: projects.kirkco.href,
        body: 'Product information rebuilt for engineers and purchasing teams. The relevant model for a Corona industrial or B2B company.',
      },
      {
        title: projects.quest.title,
        href: projects.quest.href,
        body: 'A practice site with the consultation path up front. The relevant model for a Corona clinic.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with businesses in Corona?',
        answer:
          'Yes. Corona is part of my service area, along with Lake Elsinore, Temecula, Murrieta, Menifee, and Wildomar.',
      },
      {
        question: 'Are you based in Corona?',
        answer:
          'No. I’m based in Lake Elsinore. We can discuss whether an in-person or remote meeting makes sense for your project.',
      },
      {
        question: 'Can you help with a technical product site and local SEO together?',
        answer:
          'Yes, if both fit the project. I can help organize product information for buyers and work on the separate local-search foundation. I’ll define the scope with you, and I won’t promise a ranking.',
      },
    ],
  },
] as const satisfies readonly AreaPage[];

export type AreaSlug = (typeof areas)[number]['slug'];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
