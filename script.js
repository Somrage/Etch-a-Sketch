const table = document.querySelector('.table');
const gridSize = document.getElementById('vol');
const grid = document.querySelectorAll('.grid');
let isDrawing = false;


gridSize.addEventListener('input', play);

function makeGrid(gridSize) {
    clearGrid();
    gridSize = document.getElementById('vol').value;
    for (let i = 0; i < gridSize*gridSize; i++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('grid');
        table.appendChild(newGrid);
    }    

    table.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
}

function clearGrid () {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}   

//allows to draw on grid only while mouse is pressed, although there is rare bug that activates mouse dragging instead of a function
function draw(grid) {
    grid = document.querySelectorAll('.grid');

    grid.forEach((cell) => {
        cell.addEventListener('mousedown', e => {
            isDrawing = true;
            const color = document.getElementById('colorPick').value;
            cell.style.cssText = `background-color: ${color}`;
        })

        cell.addEventListener('mouseover', e => {
            if (isDrawing === true) {
                const color = document.getElementById('colorPick').value;
                cell.style.cssText = `background-color: ${color}`;
            }
        })

        cell.addEventListener('mouseup', e => {
            isDrawing = false;
        })
    })
}

function play() {
    makeGrid();
    draw();
}

makeGrid();
draw(); 