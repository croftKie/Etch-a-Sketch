let gameArea = document.getElementById('gameArea')
let color = document.getElementById('colorPicker');
let clearBut = document.getElementById('clear');
let slider_value = document.getElementById("myRange");
let opacity_value = document.getElementById("opacity");
let drawMode = document.getElementById("drawMode");
let eraseMode = document.getElementById("eraseMode");

const DEFAULT_SIZE = slider_value.value;
const DEFAULT_MODE = 'draw';
const DEFAULT_OPACITY = opacity_value.value;
let currentSize = DEFAULT_SIZE;
let currentOpacity = DEFAULT_OPACITY;
let currentMode = DEFAULT_MODE;


function gridSetUp(currentSize) {
    gameArea.style.gridTemplateColumns = `repeat(${currentSize},1fr)`
    gameArea.style.gridTemplateRows = `repeat(${currentSize},1fr)`
    for (let i = 0; i < currentSize * currentSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseenter', changeColour);
        gameArea.appendChild(gridElement)
    }
}
function changeColour(e){
    if (currentMode == 'draw') {
        e.target.style.backgroundColor = color.value;
        e.target.style.opacity = currentOpacity;
    } else if (currentMode == 'erase') {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = currentOpacity;
    };
};
function clearGrid() {
    gameArea.innerHTML = ''
}
function resetGrid() {
    clearBut.addEventListener('click',() => {
        clearGrid()
        sizeSlider()
        gridSetUp(currentSize)
    });
}

function sizeSlider() {
    slider_value.addEventListener('input', () => {
        currentSize =  slider_value.value;
        clearGrid()
        gridSetUp(currentSize)
    });
}

function opacitySlider() {
    opacity_value.addEventListener('input', () => {
        currentOpacity =  opacity_value.value;
        // clearGrid()
        // gridSetUp(currentSize)
    });
}

drawMode.addEventListener('click',() => {
    currentMode = 'draw';
    changeColour()
});
eraseMode.addEventListener('click',() => {
    currentMode = 'erase';
    changeColour()
});

gridSetUp(currentSize)
resetGrid()
sizeSlider()
opacitySlider()













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





// gameArea.addEventListener('mousedown', (e) => {
//     const audio = document.querySelector("audio");
//     audio.currentTime = 0 // starts audio from beginning on each click
//     audio.loop = true;
//     audio.play()
//     e.classList.toggle('playing');
// });