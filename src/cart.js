import { getCurrentNumber, setCurrentNumber } from "./product-quantity.js";

const cartItemNumber = document.getElementById('item-number');
const totalPrice = document.getElementById('total-price');
const cart = document.getElementById('cart');
const cartToggle = document.getElementById('cartToggle');

let itemNumber = 0;
const itemPrice = 125.00;

export function addToCart() {
    const numberToAdd = getCurrentNumber();
    if (numberToAdd === 0) return;
    itemNumber += numberToAdd;
    setCurrentNumber(0);
    renderCartContent();
}

export function emptyCart() {
    cartCheckOut();
}

function updateCartCount(newCount) {
    if (newCount > 99) {
        cartToggle.dataset.cartCount = '99+';
    } else {
        cartToggle.dataset.cartCount = newCount;
    }
}

function showEmpty() {
    cart.classList.add('is-empty');
    cart.classList.remove('is-fill');
    cartToggle.classList.remove('is-fill');
}

function showFill() {
    cartItemNumber.textContent = `× ${itemNumber}`;
    totalPrice.textContent = `$${(itemNumber * itemPrice).toFixed(2)}`;
    cart.classList.add('is-fill');
    cart.classList.remove('is-empty');
    cartToggle.classList.add('is-fill');
    updateCartCount(itemNumber);
}

function renderCartContent() {
    if (itemNumber === 0) {
        showEmpty();
    } else {
        showFill();
    }
}

export function toggleCart() {
    cart.classList.toggle('is-open');
    renderCartContent();
}

export function cartCheckOut() {
    itemNumber = 0;
    renderCartContent();
}


