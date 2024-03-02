let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById("resetLink").addEventListener("click", function(event) {
    event.preventDefault();
    confirmReset();
});

function incrementCounter() {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    if (offcanvasNavbar.classList.contains("show")) {
        return;
    }

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


