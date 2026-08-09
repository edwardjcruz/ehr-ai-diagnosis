const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('[data-view]');
const dialog = document.querySelector('#connect-dialog');
const toast = document.querySelector('.toast');

function showView(id) {
  views.forEach(view => view.classList.toggle('active-view', view.id === id));
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.view === id));
  window.location.hash = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showView(link.dataset.view);
}));

document.querySelectorAll('[data-view-target]').forEach(button => button.addEventListener('click', () => showView(button.dataset.viewTarget)));
document.querySelectorAll('#connect-provider, #add-provider, #records-connect, #connections-connect').forEach(button => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('.provider-choice').forEach(choice => choice.addEventListener('click', () => {
  dialog.close();
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4200);
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.ask-input button').addEventListener('click', () => {
  toast.textContent = 'Harbor AI is a preview in this prototype. In production, this would submit only authorized record context.';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4600);
});
const initialView = window.location.hash.slice(1);
if (initialView && document.querySelector(`#${initialView}`)) showView(initialView);
