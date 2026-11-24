import { work } from './home';

export interface GalleryProject {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  focus?: string;
  url: string;
  domain: string;
  image: string;
  imageAlt: string;
  tone: 'yellow' | 'blue' | 'red';
  fullPage: boolean;
}

const [quest, myortho, kirkco] = work.featured;
const [smileworthy, ehrmantrout, brightlife] = work.additional;

/** Project facts are taken from the existing portfolio; screenshots are visual records of the sites. */
export const galleryProjects: GalleryProject[] = [
  {
    slug: 'quest-orthodontics',
    number: quest.number,
    title: quest.title,
    category: quest.category,
    description: quest.description,
    focus: quest.outcome,
    url: quest.url,
    domain: quest.domain,
    image: '/images/gallery/quest.webp',
    imageAlt: 'Screenshot of the Quest Orthodontics website',
    tone: quest.tone,
    fullPage: true,
  },
  {
    slug: 'myorthodontist',
    number: myortho.number,
    title: myortho.title,
    category: myortho.category,
    description: myortho.description,
    focus: myortho.outcome,
    url: myortho.url,
    domain: myortho.domain,
    image: '/images/gallery/myortho.webp',
    imageAlt: 'Screenshot of the MyOrthodontist website',
    tone: myortho.tone,
    fullPage: true,
  },
  {
    slug: 'kirkco-corporation',
    number: kirkco.number,
    title: kirkco.title,
    category: kirkco.category,
    description: kirkco.description,
    focus: kirkco.outcome,
    url: kirkco.url,
    domain: kirkco.domain,
    image: '/images/gallery/kirkco.webp',
    imageAlt: 'Screenshot of the Kirkco Corporation website',
    tone: kirkco.tone,
    fullPage: true,
  },
  {
    slug: 'smile-worthy-orthodontics',
    number: smileworthy.number,
    title: smileworthy.title,
    category: 'Healthcare · Orthodontic practice website',
    description: smileworthy.meta,
    url: smileworthy.url,
    domain: 'smileworthyortho.com',
    image: '/images/gallery/smileworthy.webp',
    imageAlt: 'Screenshot of the Smile Worthy Orthodontics website',
    tone: 'yellow',
    fullPage: true,
  },
  {
    slug: 'ehrmantrout-orthodontics',
    number: ehrmantrout.number,
    title: ehrmantrout.title,
    category: 'Healthcare · Orthodontic practice website',
    description: ehrmantrout.meta,
    url: ehrmantrout.url,
    domain: 'ehrmantroutorthodontics.com',
    image: '/images/gallery/ehrmantrout.webp',
    imageAlt: 'Screenshot of the Ehrmantrout Orthodontics website',
    tone: 'blue',
    fullPage: true,
  },
  {
    slug: 'bright-life-chiropractic',
    number: brightlife.number,
    title: brightlife.title,
    category: 'Healthcare · Chiropractic website',
    description: brightlife.meta,
    url: brightlife.url,
    domain: 'brightlifechiropractic.com',
    image: '/images/gallery/brightlife.webp',
    imageAlt: 'Screenshot of the Bright Life Chiropractic website',
    tone: 'red',
    fullPage: true,
  },
];
