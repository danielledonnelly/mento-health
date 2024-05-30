// I originally tried using JQuery to create a typewriter effect so that letters would appear one by one, but it was convoluted and didn't really have a great effect.
// Sometimes the best solutions are just the simplest ones.

 let currentLine = 1;

document.addEventListener('keydown', function() {
    const nextLine = document.getElementById(`line${currentLine}`);
    if (nextLine) {
        nextLine.classList.remove('hidden');
        currentLine++;
    }
});
