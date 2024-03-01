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

    counterElement.addEventListener('touchstart', incrementCounter);