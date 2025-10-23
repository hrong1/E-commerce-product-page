const track = document.querySelector('.carousel__slider');
const nav = document.querySelector('.carousel__thumbnail-container');
const thumbnails = Array.from(nav.children);

const slideCount = thumbnails.length;
let currentIndex = 0;

function updateCarousel(targetIndex) {
    track.style.transform = `translateX(-${100 * targetIndex}%)`;
    updateThumbnails(targetIndex)
    currentIndex = targetIndex;
}

function updateThumbnails(targetIndex) {
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === targetIndex);
    })
}

export function prevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = slideCount - 1;
    }
    updateCarousel(prevIndex);
}

export function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex > slideCount - 1) {
        nextIndex = 0;
    }
    updateCarousel(nextIndex);
}

function handleThumbnailClick(event) {
    const targetThumbnail = event.currentTarget; 
    const targetIndex = parseInt(targetThumbnail.dataset.index, 10);
    if (targetIndex === currentIndex) {
        return;
    }
    updateCarousel(targetIndex);
}

export function setupThumbnailClick() {
    thumbnails.forEach(thumb => {
    thumb.addEventListener('click', handleThumbnailClick);
    });
}