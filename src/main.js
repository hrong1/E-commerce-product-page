import '../style/main.css';
// import function
import { sidebarToggle } from "./sidebar-toggle.js";
import { addProduct, minusProduct } from "./product-quantity.js";
import { addToCart, toggleCart, cartCheckOut, emptyCart } from "./cart.js";
import { Carousel } from "./carousel.js";
import { lightboxToggle } from "./lightbox.js";
// Get element
const sidebarButton = document.getElementById('sidebarToggle');
const overlay = document.getElementById('overlay');

const decreaseButton = document.getElementById('minus-product');
const increaseButton = document.getElementById('add-product');

const cartToggle = document.getElementById('cartToggle');
const checkoutButton = document.getElementById('checkout-button');
const deleteButton = document.getElementById('delete-button');
const addItemButton = document.getElementById('add-to-cart');
const cart = document.getElementById('cart');

const productDisplay = document.getElementById('product-display');
const lightbox = document.getElementById('lightbox');
const mainImage = document.getElementById('main-image');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxClose = document.getElementById('lightbox-close');

sidebarButton.addEventListener('click', sidebarToggle);
overlay.addEventListener('click', sidebarToggle);

decreaseButton.addEventListener('click', minusProduct);
increaseButton.addEventListener('click', addProduct);

cartToggle.addEventListener('click', toggleCart);
checkoutButton.addEventListener('click', cartCheckOut);
deleteButton.addEventListener('click', emptyCart);
addItemButton.addEventListener('click', addToCart);
document.addEventListener('click', (event) => {
    if (!cart.classList.contains('is-open')) {
        return;
    }
    const isClickOnIcon = cartToggle.contains(event.target);
    const isClickInCart = cart.contains(event.target);
    if (!isClickOnIcon && !isClickInCart) {
        toggleCart();
    }
});

new Carousel(productDisplay);
new Carousel(lightbox);

mainImage.addEventListener('click', lightboxToggle);
lightboxOverlay.addEventListener('click', lightboxToggle);
lightboxClose.addEventListener('click', lightboxToggle);