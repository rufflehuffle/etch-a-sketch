window.onload = () => {
    const gridContainer = document.querySelector('#grid-container');
    
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let gridElement = document.createElement('div');
            gridElement.style.border = '1px solid black';
            gridElement.style.backgroundColor = 'white';
            gridElement.addEventListener('mouseover', (e) => gridElement.style.backgroundColor = 'black')
            gridContainer.appendChild(gridElement);
        }
    }
};
let savedGridSize = 15;

function toggleGridSettings() {
    const gridSettings = document.querySelector('#grid-settings');

    const gridSize = document.querySelector('#grid-size');

    gridSize.value = savedGridSize;

    switch(gridSettings.style.display) {
        case 'block':
            gridSettings.style.display = 'none';
            break;
        default:
            gridSettings.style.display = 'block';
    }
}

function changeGridSize() {
    const gridSize = document.querySelector('#grid-size');
    
    if (!(+gridSize.value)) {
        console.log('ERROR');
        return;
    } else {
        const gridContainer = document.querySelector('#grid-container');

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        gridContainer.style.gridTemplateColumns = `repeat(${+gridSize.value}, 25px)`
        gridContainer.style.gridTemplateRows = `repeat(${+gridSize.value}, 25px)`

        for (let i = 0; i < ((+gridSize.value) ** 2); i++) {
            let gridElement = document.createElement('div');
            gridElement.style.border = '1px solid black';
            gridElement.style.backgroundColor = 'white';
            gridElement.addEventListener('mouseover', (e) => gridElement.style.backgroundColor = 'black')
            gridContainer.appendChild(gridElement);
        }

        savedGridSize = +gridSize.value;
    }
}