// Edit this file to change what the site says. Everything else is layout.
export const profile = {
  tagline: 'I build things at the intersection of finance, data and software.',
  about: [
    'Write a short paragraph about yourself here: what you study, what you are interested in, and what you are looking for.',
    'A second paragraph is a good place for skills, interests or what you do outside of work.',
  ],
  // Put your PDF at public/resume.pdf
  resume: 'resume.pdf',
  links: [
    { label: 'Email', href: 'mailto:ayushtokeria@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/AyushTokeria' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  ],
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    title: 'ColdEmails',
    description: 'A free personal cold-email tool for recruiting: contact matching, drafting, scheduled Gmail sending and a reply pipeline.',
    tags: ['TypeScript', 'React', 'Cloudflare Workers'],
    href: 'https://github.com/AyushTokeria/ColdEmail',
  },
  {
    title: 'Turbulence Analogues for Volatility Regimes',
    description: 'Applying ideas from fluid turbulence to identify and describe market volatility regimes.',
    tags: ['Python', 'Quant'],
  },
  {
    title: 'Fit Check',
    description: 'An iOS app built in Xcode and Swift.',
    tags: ['Swift', 'iOS'],
  },
  {
    title: 'HouseIQ',
    description: 'Describe this project in one or two sentences.',
    tags: ['Data'],
  },
];
