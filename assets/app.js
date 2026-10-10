'use strict';
const episodes = [...document.querySelectorAll('.episode')];
const season = document.querySelector('#season');
const kind = document.querySelector('#kind');
const search = document.querySelector('#search');
let done = {};
try {
  const stored = JSON.parse(localStorage.getItem('bcs-learning-v1') || '{}');
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) done = stored;
} catch (_) { /* Progress is optional when storage is unavailable. */ }
function progress() {
  const count = episodes.filter(ep => done[ep.id] === true).length;
  document.querySelector('#progress').textContent = `已复习 ${count} / ${episodes.length} 集`;
  document.querySelectorAll('.done').forEach(input => {
    input.checked = done[input.dataset.id] === true;
    document.querySelector(`#${input.dataset.id} .completed-indicator`).textContent = input.checked ? '✓' : '';
  });
}
function filter() {
  const q = search.value.trim().toLowerCase();
  let episodeCount = 0, cardCount = 0;
  episodes.forEach(ep => {
    const allowedSeason = season.value === 'all' || ep.dataset.season === season.value;
    const allowedProgress = !document.querySelector('#unfinished').checked || !done[ep.id];
    const metadataMatch = q && ep.dataset.search.includes(q);
    let hits = 0;
    ep.querySelectorAll('.card').forEach(card => {
      const allowedKind = kind.value === 'all' || card.dataset.kind === kind.value;
      const show = allowedKind && (!q || metadataMatch || card.dataset.search.includes(q));
      card.classList.toggle('hidden', !show);
      if (show) hits++;
    });
    const showEpisode = allowedSeason && allowedProgress && hits > 0;
    ep.classList.toggle('hidden', !showEpisode);
    if (showEpisode) {
      episodeCount++;
      cardCount += hits;
      if (q) ep.open = true;
    }
    ep.querySelector('.practice').classList.toggle('hidden', !!q || kind.value !== 'all');
  });
  document.querySelectorAll('.season').forEach(section => {
    section.classList.toggle('hidden', ![...section.querySelectorAll('.episode')].some(ep => !ep.classList.contains('hidden')));
  });
  document.querySelector('#results').textContent = `显示 ${episodeCount} 集 · ${cardCount} 项`;
}
document.querySelectorAll('.done').forEach(input => input.addEventListener('change', () => {
  done[input.dataset.id] = input.checked;
  try { localStorage.setItem('bcs-learning-v1', JSON.stringify(done)); } catch (_) {}
  progress(); filter();
}));
season.addEventListener('change', filter);
kind.addEventListener('change', filter);
search.addEventListener('input', filter);
document.querySelector('#unfinished').addEventListener('change', filter);
document.querySelector('#hidezh').addEventListener('change', e => document.body.classList.toggle('hide-zh', e.target.checked));
document.querySelector('#expand').addEventListener('click', () => episodes.filter(ep => !ep.classList.contains('hidden')).forEach(ep => { ep.open = true; }));
document.querySelector('#collapse').addEventListener('click', () => episodes.forEach(ep => { ep.open = false; }));
document.querySelector('#print').addEventListener('click', () => window.print());
let beforePrint = [];
window.addEventListener('beforeprint', () => {
  beforePrint = [...document.querySelectorAll('details')].map(el => [el, el.open]);
  beforePrint.forEach(([el]) => { el.open = true; });
});
window.addEventListener('afterprint', () => beforePrint.forEach(([el, open]) => { el.open = open; }));
function openHash() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.classList.contains('episode')) target.open = true;
}
window.addEventListener('hashchange', openHash);
progress(); filter();
if (location.hash) openHash(); else episodes[0].open = true;
