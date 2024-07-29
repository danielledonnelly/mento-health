let currentLine = 1;
let currentLetterIndex = 0;
let typing = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !typing) {
        const nextLine = document.getElementById(`line${currentLine}`);
        if (nextLine) {
            typing = true;
            typeWriter(nextLine);
        }
    }
});

function typeWriter(element) {
    const text = element.textContent;
    element.textContent = '';
    element.classList.remove('hidden');
    
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); 
        } else {
            typing = false;
            currentLine++;
        }
    }

    type();
}
