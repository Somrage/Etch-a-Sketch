const table = document.querySelector('.table');
let isDrawing = false;
const gridSize = document.getElementById('vol');

gridSize.addEventListener('input', makeGrid);

function makeGrid(gridSize) {
    clearGrid();
    gridSize = document.getElementById('vol').value;
    for (let i = 0; i < gridSize*gridSize; i++) {
        const grid = document.createElement('div')
        grid.classList.add('grid')
        table.appendChild(grid);
    }    

    table.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
}

function clearGrid () {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}   


const grid = document.querySelectorAll('.grid')

//allows to draw on grid only while mouse is pressed, although there is rare bug that activates mouse dragging instead of a function
function draw() {
    grid.forEach((cell) => {
        cell.addEventListener('mousedown', e => {
            isDrawing = true;
            cell.classList.add('cell');
        })

        cell.addEventListener('mouseover', e => {
            if (isDrawing === true) {
                cell.classList.add('cell');
            }
        })

        cell.addEventListener('mouseup', e => {
            isDrawing = false;
        })
    })
}

draw();