import './style.css';
import { profile, projects } from './content';

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

function link(label: string, href: string, primary = false): HTMLAnchorElement {
  const a = document.createElement('a');
  a.className = primary ? 'btn primary' : 'btn';
  a.textContent = label;
  a.href = href;
  if (/^https?:/.test(href)) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
  return a;
}

$('tagline').textContent = profile.tagline;

for (const text of profile.about) {
  const p = document.createElement('p');
  p.textContent = text;
  $('about-text').append(p);
}

// BASE_URL keeps the resume link working when served from /<repo>/.
$('actions').append(
  link('Resume', `${import.meta.env.BASE_URL}${profile.resume}`, true),
  link('Projects', '#projects'),
);
for (const l of profile.links) $('contact-links').append(link(l.label, l.href));

for (const p of projects) {
  const card = document.createElement(p.href ? 'a' : 'div');
  card.className = 'card';
  if (card instanceof HTMLAnchorElement && p.href) {
    card.href = p.href;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
  }
  const h = document.createElement('h3');
  h.textContent = p.title;
  const d = document.createElement('p');
  d.textContent = p.description;
  const tags = document.createElement('ul');
  tags.className = 'tags';
  for (const t of p.tags) {
    const li = document.createElement('li');
    li.textContent = t;
    tags.append(li);
  }
  card.append(h, d, tags);
  $('project-grid').append(card);
}

$('year').textContent = String(new Date().getFullYear());
