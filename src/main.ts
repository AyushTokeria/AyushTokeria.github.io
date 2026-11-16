import './style.css';
import {
  profile, jobs, projects, skills, achievements, leadership, education, beyond,
  type Job, type Project,
} from './content';

const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESC[c] ?? c);
const when = (s?: string, tag = 'p') => (s ? `<${tag} class="when">${esc(s)}</${tag}>` : '');
const chips = (items: string[]) => `<ul class="chips">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

function mount(id: string, html: string) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function jobHtml(j: Job): string {
  const stats = j.stats
    ? `<div class="stats">${j.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('')}</div>`
    : '';
  const bullets = j.bullets
    .map((b) => `<li><p>${esc(b.text)}</p>${b.metric ? `<span class="metric">${esc(b.metric)}</span>` : ''}</li>`)
    .join('');
  return `<article class="job">
    <header class="meta"><h3>${esc(j.org)}</h3><p class="role">${esc(j.role)}</p><p class="place">${esc(j.place)}</p>${when(j.when)}</header>
    <div class="body">${j.note ? `<p class="note">${esc(j.note)}</p>` : ''}${stats}<ul class="bullets">${bullets}</ul>${chips(j.tags)}</div>
  </article>`;
}

function projectHtml(p: Project): string {
  const inner = `<p class="kind"><span>${esc(p.kind)}</span>${when(p.when, 'span')}</p>
    <h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>${p.result ? `<p class="result">${esc(p.result)}</p>` : ''}${chips(p.stack)}`;
  return p.href
    ? `<a class="card" href="${esc(p.href)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
    : `<article class="card">${inner}</article>`;
}

mount('facts', profile.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.text)}</dd></div>`).join(''));
mount('jobs', jobs.map(jobHtml).join(''));
mount('projects-grid', projects.map(projectHtml).join(''));
mount('skills-list', skills.map((s) => `<div class="skill"><h3>${esc(s.label)}</h3><div>${chips(s.items)}${s.evidence ? `<p>${esc(s.evidence)}</p>` : ''}</div></div>`).join(''));
mount('achievements-list', achievements.map((a) => `<div class="row"><p class="label">${esc(a.label)}</p><div><p>${esc(a.text)}</p></div>${when(a.when, 'span') || '<span></span>'}</div>`).join(''));
mount('leadership-list', leadership.map((l) => `<div class="row"><p class="label">${esc(l.org)}</p><div><p><strong>${esc(l.role)}</strong></p><p>${esc(l.text)}</p></div>${when(l.when, 'span') || '<span></span>'}</div>`).join(''));
mount('education-grid', education.map((e) => `<article class="card"><h3>${esc(e.school)}</h3><p class="strong">${esc(e.what)}</p>${when(e.when)}${e.detail ? `<p>${esc(e.detail)}</p>` : ''}</article>`).join(''));
mount('beyond-grid', beyond.map((b) => `<article class="card"><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></article>`).join(''));

mount('n-jobs', `${jobs.length} roles`);
mount('n-projects', `${projects.length} projects`);

const links = [
  profile.email ? `<a class="addr" href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>` : '',
  profile.linkedin ? `<a href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : '',
  profile.github ? `<a href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : '',
].filter(Boolean);
mount('footer-links', links.join(''));
