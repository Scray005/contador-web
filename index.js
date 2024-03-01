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
    const userResponse = prompt("¿Quieress reiniciar el contador? (sí/no)");

    if (userResponse && userResponse.toLowerCase() === 'si') {
        resetCounter();
    }
}