const header = document.getElementById('header');
const sidebarButton = document.getElementById('sidebarToggle');


function handleAria() {
    const isExpanded = sidebarButton.getAttribute('aria-expanded') === 'true';
    sidebarButton.setAttribute('aria-expanded', !isExpanded);
}

export function sidebarToggle() {
    header.classList.toggle('is-open');
    handleAria();
}