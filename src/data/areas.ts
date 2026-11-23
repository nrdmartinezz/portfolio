import type { Faq, ProofItem, TextBlock } from './services';
import { projects } from './projects';

export interface AreaPage {
  slug: 'lake-elsinore' | 'temecula' | 'murrieta' | 'menifee' | 'wildomar' | 'corona';
  city: string;
  title: string;
  description: string;
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
    title: 'Web design, SEO, and social media in Lake Elsinore — Nate Martinez',
    description:
      'Nate Martinez lives in Lake Elsinore and builds websites, local SEO, and social media for businesses there, from downtown and the lake out to the hillside tracts.',
    kicker: 'Lake Elsinore',
    heading: 'Web design, SEO, and social media in Lake Elsinore',
    answer:
      'Nate Martinez lives in Lake Elsinore and builds websites, local SEO, and social media for businesses here. The city runs from the historic downtown and the lakefront out through Lakeland Village, Tuscany Hills, Rosetta Canyon, Summerly, and Canyon Hills. A site has to be understandable across that spread, not only on one block.',
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
          'Yes. Nate Martinez lives in Lake Elsinore. There is no published street address. The Google Business Profile, when set up, is a service-area listing.',
      },
      {
        question: 'Do you cover the whole city?',
        answer:
          'Yes. Engagements can name downtown, the lakefront, Lakeland Village, Tuscany Hills, Rosetta Canyon, Summerly, and Canyon Hills when those are places you actually serve.',
      },
      {
        question: 'What kinds of Lake Elsinore businesses are a fit?',
        answer:
          'Practices, local services, shops, and companies with a lot to explain. The published sites are orthodontic, chiropractic, and industrial work. They show the build. They are not a list of Lake Elsinore clients.',
      },
      {
        question: 'Can you also handle search and social?',
        answer:
          'Yes. Web development, local SEO, and social media management are separate services, and the same person does all three.',
      },
    ],
  },
  {
    slug: 'temecula',
    city: 'Temecula',
    title: 'Web design, SEO, and social media in Temecula — Nate Martinez',
    description:
      'Nate Martinez, based in Lake Elsinore, builds websites and sets up local SEO and social media for Temecula businesses in Old Town, wine country, and the residential neighborhoods.',
    kicker: 'Temecula',
    heading: 'Websites, search, and social for Temecula',
    answer:
      'Nate Martinez, based in Lake Elsinore, designs websites and sets up local SEO and social media for Temecula businesses. Temecula searches split between Old Town, the wine country, and neighborhoods such as Redhawk, Harveston, and Paloma del Sol. A tasting room and a local practice do not need the same page.',
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
        question: 'Do you meet in Temecula?',
        answer:
          'Yes. The practice is in neighboring Lake Elsinore, and Temecula engagements can be in person or remote.',
      },
      {
        question: 'Is a wine-country site different from a local service site?',
        answer:
          'Yes. Visitor businesses need a booking or visit path and a social feed that shows the place. A local practice needs the city, the service, and a way to call. We do not use one layout for both.',
      },
      {
        question: 'Will you promise Temecula rankings?',
        answer:
          'No. The pages, the profile, and the technical setup are the work. A position is not part of the agreement.',
      },
    ],
  },
  {
    slug: 'murrieta',
    city: 'Murrieta',
    title: 'Web design, SEO, and social media in Murrieta — Nate Martinez',
    description:
      'Nate Martinez builds websites, local SEO, and social media for Murrieta businesses from his practice in Lake Elsinore. One person does the design, the code, and the marketing.',
    kicker: 'Murrieta',
    heading: 'An independent practice for Murrieta businesses',
    answer:
      'Nate Martinez builds websites and sets up local SEO and social media for Murrieta businesses from Lake Elsinore. Murrieta already has established agencies. The difference is one person, named client work you can open, and no handoff between a designer, a developer, and a marketer.',
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
        question: 'Why hire someone in Lake Elsinore for a Murrieta business?',
        answer:
          'The cities share a service area, and the work is the site, the profile, and the posts, not a storefront on Jefferson Avenue. In-person meetings are still practical.',
      },
      {
        question: 'How is this different from a Murrieta agency?',
        answer:
          'You work with the person who designs and builds the site. Published work is named: Quest Orthodontics, MyOrthodontist, and Kirkco Corporation. There is no account team in between.',
      },
      {
        question: 'Do you sell a cheap template package?',
        answer:
          'No. Prices are quoted for the project. The site is designed and built for the business.',
      },
    ],
  },
  {
    slug: 'menifee',
    city: 'Menifee',
    title: 'Web design, SEO, and social media in Menifee — Nate Martinez',
    description:
      'Nate Martinez serves Menifee from Lake Elsinore with websites, local SEO, and social media for home services, new practices, and local shops.',
    kicker: 'Menifee',
    heading: 'Websites and local search for Menifee',
    answer:
      'Nate Martinez serves Menifee from Lake Elsinore with websites, local SEO, and social media. Menifee is still adding households. The businesses that show up are often home services, new practices, and local shops whose sites do not yet explain the offer.',
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
        question: 'Is Menifee close enough for in-person work?',
        answer:
          'Yes. Menifee is in the same southwest Riverside County service area as the Lake Elsinore practice.',
      },
      {
        question: 'What if I only have a Facebook page?',
        answer:
          'Social can continue, but it needs a page to land on. We build that page before the posting cadence depends on it.',
      },
      {
        question: 'Do you guarantee a Menifee map ranking?',
        answer:
          'No. The work is the site, the Google Business Profile, and pages that name Menifee accurately.',
      },
    ],
  },
  {
    slug: 'wildomar',
    city: 'Wildomar',
    title: 'Web design, SEO, and social media in Wildomar — Nate Martinez',
    description:
      'Nate Martinez builds websites and sets up local SEO and social media for Wildomar businesses, with the city named on the page and on the Google profile.',
    kicker: 'Wildomar',
    heading: 'A Wildomar page, not a Murrieta footnote',
    answer:
      'Nate Martinez works with Wildomar businesses on websites, local SEO, and social media. Wildomar is often folded into a Murrieta or Lake Elsinore landing page. A page that names Wildomar, and a Google profile that does too, is how a business here shows up for its own city.',
    local: [
      {
        title: 'The city name itself',
        body: 'If the only mention of Wildomar is a bullet on a regional agency page, the business does not have a page of its own. This practice writes the city into the page, the title, and the profile.',
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
        question: 'Why does naming Wildomar matter?',
        answer:
          'People search the city they mean. A page aimed at Murrieta or Lake Elsinore answers a different question, even when the business will happily drive to Wildomar.',
      },
      {
        question: 'Are you nearby?',
        answer: 'Yes. The practice is in Lake Elsinore, which shares a border with Wildomar.',
      },
      {
        question: 'Will you invent Wildomar reviews or landmarks?',
        answer:
          'No. The page names the city and the service you provide. It does not fake local clients or local rankings.',
      },
    ],
  },
  {
    slug: 'corona',
    city: 'Corona',
    title: 'Web design, SEO, and social media in Corona — Nate Martinez',
    description:
      'Nate Martinez designs websites and sets up local SEO and social media for Corona businesses along the 91 corridor, including companies with a technical or multi-step offer.',
    kicker: 'Corona',
    heading: 'Web design and local marketing in Corona',
    answer:
      'Nate Martinez designs and builds websites, and sets up local SEO and social media, for Corona businesses. Corona sits on the 91 corridor between the Inland Empire and Orange County. The fit is local services that need to be found in Corona, and companies with something technical or multi-step to explain.',
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
        question: 'Do you work the Corona side of Riverside County?',
        answer:
          'Yes. Corona is part of the service area, along with Lake Elsinore, Temecula, Murrieta, Menifee, and Wildomar. The practice itself is in Lake Elsinore.',
      },
      {
        question: 'Is this an Orange County agency?',
        answer:
          'No. Meetings and remote work both happen, and the published phone is a 949 number, but the practice is Lake Elsinore. Corona clients are not routed through an Orange County office.',
      },
      {
        question: 'Can you handle a technical product site and local SEO together?',
        answer:
          'Yes, when both are actually needed. The product structure and the local profile are different jobs, done by the same person, and neither includes a ranking guarantee.',
      },
    ],
  },
] as const satisfies readonly AreaPage[];

export type AreaSlug = (typeof areas)[number]['slug'];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
