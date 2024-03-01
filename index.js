let count = 0;
const counterElement = document.getElementById('counter');

function incrementCounter() {
    count++;
    counterElement.textContent = count;
}

function resetCounter() {
    count = 0;
    counterElement.textContent = count;
}

function handleTouchStart() {
    incrementCounter();
}

function confirmReset() {
    const response = confirm("¿Quieres reiniciar el contador?");
    if (response) {
        resetCounter();
    }
}