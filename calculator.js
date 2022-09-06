function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return ((a * 10) - (b * 10)) / 10;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else {
        return Math.round((a * 10) / (b * 10)) / 10;
    }
}

export { add, subtract, multiply, divide }