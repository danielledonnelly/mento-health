let currentLine = 1;

document.addEventListener('keydown', function() {
    const nextLine = document.getElementById(`line${currentLine}`);
    if (nextLine) {
        nextLine.classList.remove('hidden');
        currentLine++;
    }
});
