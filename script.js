// initialises DOM objects/Elements as variables
let gameArea = document.getElementById('gameArea')
let color = document.getElementById('colorPicker');
let clearBut = document.getElementById('clear');
let slider_value = document.getElementById("myRange");
let opacity_value = document.getElementById("opacity");
let drawMode = document.getElementById("drawMode");
let eraseMode = document.getElementById("eraseMode");

// initialises variables for default values, and adjustable "current" values
const DEFAULT_SIZE = slider_value.value;
const DEFAULT_MODE = 'draw';
const DEFAULT_OPACITY = opacity_value.value;
let currentSize = DEFAULT_SIZE;
let currentOpacity = DEFAULT_OPACITY;
let currentMode = DEFAULT_MODE;

function changeColour(e){ // sets color based on play mode and color picker choice
    if (currentMode === 'draw') {
        e.target.style.backgroundColor = color.value;
        e.target.style.opacity = currentOpacity;
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = 'white';
    };
};
function clearGrid() { // removes underlying grid to redraw
    gameArea.innerHTML = ''
};
function resetGrid() { // manages grid draw
    clearBut.addEventListener('click',() => {
        clearGrid()
        sizeSlider()
        gridSetUp(currentSize)
    });
};

function sizeSlider() { // adjusts size of grid dynamically (user inputted)
    slider_value.addEventListener('input', () => {
        currentSize = slider_value.value;
        clearGrid()
        gridSetUp(currentSize)
    });
};

function opacitySlider() { // adjusts opacity dynamically (user inputted)
    opacity_value.addEventListener('input', () => {
        currentOpacity = opacity_value.value;
    });
};

function gridSetUp(currentSize) { // draws the grid
    gameArea.style.gridTemplateColumns = `repeat(${currentSize},1fr)`
    gameArea.style.gridTemplateRows = `repeat(${currentSize},1fr)`
    for (let i = 0; i < currentSize * currentSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseenter', changeColour);
        gameArea.appendChild(gridElement)
    };
};

// event listeners to capture clicks on draw or erase buttons
drawMode.addEventListener('click',() => {
    currentMode = 'draw';
    changeColour()
});
eraseMode.addEventListener('click',() => {
    currentMode = 'erase';
    changeColour()
});

// function calls to run app
gridSetUp(currentSize)
resetGrid()
sizeSlider()
opacitySlider()