const currentNumber = document.getElementById('number-select');

let current = 0;

function updateDisplay() {
    currentNumber.textContent = current;
}

export function getCurrentNumber() {
    return current;
}

export function setCurrentNumber(newNumber) {
    if (Number.isInteger(newNumber)) {
        current = newNumber;
        updateDisplay();
    }
}

export function addProduct() {
    current++;
    updateDisplay();
}

export function minusProduct() {
    if (current > 0) {
        current--;
        updateDisplay();
    }
}

