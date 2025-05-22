function toggleMode() {
  document.body.classList.toggle('light-mode');
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-mode');
  }
});


const btn = document.getElementById('toggle-md');
const container = document.getElementById('markdown-container');

if (btn && container) {
  fetch(markDownPath)
    .then(res => res.text())
    .then(md => {
      container.innerHTML = marked.parse(md);
    });

  btn.addEventListener('click', () => {
    const isCollapsed = container.classList.toggle('expanded');
    container.classList.toggle('collapsed', !isCollapsed);
    btn.textContent = isCollapsed ? 'Show Less' : 'Show More';
  });
}
