gameSize = 16;

gameArea = document.getElementById('gameArea')

gameArea.style.gridTemplateColumns = `repeat(${gameSize},1fr)`
gameArea.style.gridTemplateRows = `repeat(${gameSize},1fr)`

for (let i = 0; i < gameSize * gameSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black'

    });
    gameArea.appendChild(gridElement)
}


gameArea.addEventListener('mousedown', (e) => {
    const audio = document.querySelector("audio");
    audio.currentTime = 0 // starts audio from beginning on each click
    audio.loop = true;
    audio.play()
    e.classList.toggle('playing');
});


// To Do List
// Refactor grid code into clean functions
// Add user input for size
// set up default parameters
// add colour picker
// add opacity
// add erase function and clear function
// Final styling and tweaks
// IF POSS - looping audio
// Ensure responsiveness
// Bake in error handling for incorrect inputs?