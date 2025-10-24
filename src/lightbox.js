const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightbox = document.getElementById('lightbox');

export function lightboxToggle() {
    lightbox.classList.toggle('is-open');
    lightboxOverlay.classList.toggle('is-open');
}