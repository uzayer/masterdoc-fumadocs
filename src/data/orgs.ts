export interface OrgEntry {
  name: string;
  shortName: string;
  description: string;
  url?: string;
}

export const orgs: Record<string, OrgEntry> = {
  DAY: {
    name: 'Dear Asian Youth',
    shortName: 'DAY',
    description: '501(c)(3) advocacy nonprofit, founded 2020 by Stephanie Hu (Harvard).',
    url: 'https://dearasianyouth.org',
  },
  DIAL: {
    name: 'DIAL, North South University',
    shortName: 'DIAL',
    description: 'HCI lab in the ECE department of NSU. Lab director: Dr. Nova Ahmed. Founded 2020.',
  },
  TDS: {
    name: 'The Daily Star',
    shortName: 'TDS',
    description: 'Largest English newspaper in Bangladesh. Youth segment formerly SHOUT, now Campus.',
    url: 'https://www.thedailystar.net',
  },
  TBB: {
    name: "Breezer's Brew",
    shortName: 'TBB',
    description: "South Breeze School's first student-led literary magazine.",
  },
  AUT: {
    name: 'Autana Systems',
    shortName: 'AUT',
    description: 'A company in planning - documentation infrastructure for the enterprise AI era.',
  },
  IWP: {
    name: 'International Writing Program',
    shortName: 'IWP',
    description: 'University of Iowa IWP - UNESCO City of Literature. Hosted the Between The Lines residency.',
    url: 'https://iwp.uiowa.edu',
  },
};
