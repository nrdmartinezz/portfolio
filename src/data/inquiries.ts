/** Form values. The contact function allowlists the same strings. */

export interface InquiryChoice {
  value: string;
  label: string;
}

export const serviceChoices = [
  { value: 'web-development', label: 'Web development' },
  { value: 'local-seo', label: 'Local SEO' },
  { value: 'social-media', label: 'Social media' },
  { value: 'unsure', label: 'Not sure yet' },
] as const satisfies readonly InquiryChoice[];

export const areaChoices = [
  { value: 'lake-elsinore', label: 'Lake Elsinore' },
  { value: 'temecula', label: 'Temecula' },
  { value: 'murrieta', label: 'Murrieta' },
  { value: 'menifee', label: 'Menifee' },
  { value: 'wildomar', label: 'Wildomar' },
  { value: 'corona', label: 'Corona' },
  { value: 'other', label: 'Somewhere else' },
] as const satisfies readonly InquiryChoice[];

export type ServiceChoice = (typeof serviceChoices)[number]['value'];
export type AreaChoice = (typeof areaChoices)[number]['value'];
