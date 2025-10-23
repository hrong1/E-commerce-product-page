export class Carousel {
    constructor(carouselElement, options = {}) {
        const {
            sliderSelector = '.carousel__slider',
            containerSelector = '.carousel__thumbnail-container',
            prevButtonSelector = '.carousel__arrow--prev',
            nextButtonSelector = '.carousel__arrow--next'
        } = options;

        this.root = carouselElement.querySelector('.carousel');
        if (!this.root) {
            console.error('Carousel not found:', carouselElement);
            return;
        }
        this.slider = this.root.querySelector(sliderSelector);
        this.container = this.root.querySelector(containerSelector);
        this.prevButton = this.root.querySelector(prevButtonSelector);
        this.nextButton = this.root.querySelector(nextButtonSelector);

        if (!this.slider || !this.container || !this.prevButton || !this.nextButton) {
            console.error('Carousel elements not found:', carouselElement);
            return;
        }
        
        this.thumbnails = Array.from(this.container.children);
        this.slideCount = this.thumbnails.length;
        
        if (this.slideCount === 0) return;
        this.currentIndex = 0;
        this.setupThumbnailClick();
        this.setupButtonClicks();
        this.updateCarousel(0);
    }

    updateCarousel(targetIndex) {
        this.slider.style.transform = `translateX(-${100 * targetIndex}%)`;
        this.updateThumbnails(targetIndex);
        this.currentIndex = targetIndex;
    }

    updateThumbnails(targetIndex) {
        this.thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === targetIndex);
        });
    }

    prevSlide = () => {
        const prevIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        this.updateCarousel(prevIndex);
    }

    nextSlide = () => {
        const nextIndex = (this.currentIndex + 1) % this.slideCount;
        this.updateCarousel(nextIndex);
    }

    handleThumbnailClick = (event) => {
        const targetThumbnail = event.currentTarget;
        const targetIndex = this.thumbnails.indexOf(targetThumbnail);
        
        if (targetIndex === -1 || targetIndex === this.currentIndex) {
            return;
        }
        
        this.updateCarousel(targetIndex);
    }

    setupThumbnailClick() {
        this.thumbnails.forEach(thumb => {
            thumb.addEventListener('click', this.handleThumbnailClick);
        });
    }

    setupButtonClicks() {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', this.prevSlide);
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', this.nextSlide);
        }
    }

    destroy() {
         this.thumbnails.forEach(thumb => {
            thumb.removeEventListener('click', this.handleThumbnailClick);
        });
        
        if (this.prevButton) {
            this.prevButton.removeEventListener('click', this.prevSlide);
        }
        if (this.nextButton) {
            this.nextButton.removeEventListener('click', this.nextSlide);
        }
    }
}