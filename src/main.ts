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

let projectCount = 0;
function projectHtml(p: Project): string {
  const id = `project-${projectCount++}`;
  const kind = `<p class="kind"><span>${esc(p.kind)}</span>${when(p.when, 'span')}</p>`;
  const front = `<div class="card pfront" role="button" tabindex="0" aria-expanded="false" aria-controls="${id}">
    ${kind}<h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>
    <div class="pbottom">${p.result ? `<p class="result">${esc(p.result)}</p>` : ''}${chips(p.stack)}<span class="more" aria-hidden="true"><span class="m-hover">Hover for details</span><span class="m-tap">Tap for details</span></span></div>
  </div>`;
  const points = p.points?.length ? `<ul class="points">${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const links = p.links?.length
    ? `<div class="plinks">${p.links.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join('')}</div>`
    : '';
  const back = `<div class="ppop" id="${id}" role="group" aria-label="${esc(p.name)}, details" tabindex="-1">
    <div class="phead">${kind}<button type="button" class="pclose" aria-label="Close details">×</button></div>
    <h3>${esc(p.name)}</h3><p>${esc(p.detail ?? p.text)}</p>${points}${chips(p.stack)}${links}
  </div>`;
  return `<article class="pslot">${front}${back}</article>`;
}

mount('facts', profile.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.text)}</dd></div>`).join(''));
mount('jobs', jobs.map(jobHtml).join(''));
mount('projects-grid', projects.map(projectHtml).join(''));
mount('skills-list', skills.map((s) => `<div class="skill"><h3>${esc(s.label)}</h3><div>${chips(s.items)}${s.evidence ? `<p>${esc(s.evidence)}</p>` : ''}</div></div>`).join(''));
mount('achievements-list', achievements.map((a) => `<div class="row"><p class="label">${esc(a.label)}</p><div><p>${esc(a.text)}</p></div>${when(a.when, 'span') || '<span></span>'}</div>`).join(''));
mount('leadership-list', leadership.map((l) => `<div class="row"><p class="label">${esc(l.org)}</p><div><p><strong>${esc(l.role)}</strong></p><p>${esc(l.text)}</p></div>${when(l.when, 'span') || '<span></span>'}</div>`).join(''));
mount('education-grid', education.map((e) => `<article class="card">${e.logo ? `<div class="logo"><img src="${esc(e.logo)}"${e.logoHeight ? ` style="max-height:${e.logoHeight}px"` : ''} alt="" decoding="async"></div>` : ''}<h3>${esc(e.school)}</h3><p class="strong">${esc(e.what)}</p>${when(e.when)}${e.detail ? `<p>${esc(e.detail)}</p>` : ''}</article>`).join(''));
mount('beyond-grid', beyond.map((b) => `<article class="card"><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></article>`).join(''));

mount('n-jobs', `${jobs.length} roles`);
mount('n-projects', `${projects.length} projects`);

const links = [
  profile.email ? `<a class="addr" href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>` : '',
  profile.linkedin ? `<a href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : '',
  profile.github ? `<a href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : '',
].filter(Boolean);
mount('footer-links', links.join(''));

// Project cards: hover with a mouse, or tap / press Enter, to flip a card over the others.
interface CardState { hover: boolean; pinned: boolean; timer?: number }
const slots = Array.from(document.querySelectorAll<HTMLElement>('.pslot'));
const states = new Map<HTMLElement, CardState>();

function refresh(slot: HTMLElement) {
  const st = states.get(slot);
  if (!st) return;
  const open = st.hover || st.pinned;
  slot.classList.toggle('open', open);
  slot.querySelector('.pfront')?.setAttribute('aria-expanded', String(open));
}
function closeOthers(keep: HTMLElement) {
  for (const s of slots) {
    if (s === keep) continue;
    const st = states.get(s);
    if (!st) continue;
    window.clearTimeout(st.timer);
    st.hover = false;
    st.pinned = false;
    refresh(s);
  }
}

for (const slot of slots) {
  const st: CardState = { hover: false, pinned: false };
  states.set(slot, st);
  const front = slot.querySelector<HTMLElement>('.pfront');
  const pop = slot.querySelector<HTMLElement>('.ppop');
  if (!front || !pop) continue;

  slot.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'touch') return;
    window.clearTimeout(st.timer);
    st.timer = window.setTimeout(() => { st.hover = true; closeOthers(slot); refresh(slot); }, 90);
  });
  slot.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'touch') return;
    window.clearTimeout(st.timer);
    st.timer = window.setTimeout(() => { st.hover = false; refresh(slot); }, 140);
  });
  front.addEventListener('click', () => {
    st.pinned = true;
    closeOthers(slot);
    refresh(slot);
    pop.focus({ preventScroll: true });
  });
  front.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); front.click(); }
  });
  slot.querySelector('.pclose')?.addEventListener('click', () => {
    st.hover = false;
    st.pinned = false;
    refresh(slot);
    front.focus({ preventScroll: true });
  });
  slot.addEventListener('focusout', (e) => {
    const next = e.relatedTarget as Node | null;
    if (next && !slot.contains(next)) { st.pinned = false; refresh(slot); }
  });
}
document.addEventListener('click', (e) => {
  const target = e.target as Node;
  for (const slot of slots) {
    const st = states.get(slot);
    if (st && !slot.contains(target)) { st.pinned = false; refresh(slot); }
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  for (const slot of slots) {
    const st = states.get(slot);
    if (!st || !slot.classList.contains('open')) continue;
    const hadFocus = slot.contains(document.activeElement);
    st.hover = false;
    st.pinned = false;
    refresh(slot);
    if (hadFocus) slot.querySelector<HTMLElement>('.pfront')?.focus({ preventScroll: true });
  }
});
