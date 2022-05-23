const table = document.querySelector('.table');
const grid = document.querySelectorAll('.grid');
const clearGrid = document.querySelector('#clearGrid');
const fillGrid = document.querySelector('#fillGrid');
const gridSize = document.getElementById('vol');
let isDrawing = false;

function fillGridFunc(grid, color) {
    grid = document.querySelectorAll('.grid');
    color = document.getElementById('colorPick').value;

    grid.forEach((cell) => {
        cell.style.cssText = `background-color: ${color}`;
    })
}

function makeGrid(gridSize) {
    deleteGrid();
    gridSize = document.getElementById('vol').value;
    for (let i = 0; i < gridSize*gridSize; i++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('grid');
        table.appendChild(newGrid);
    }    

    table.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
}

function deleteGrid () {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}   




function draw(grid) {
    grid = document.querySelectorAll('.grid');

    grid.forEach((cell) => {
        cell.setAttribute('draggable', 'false');

        //this listener actually prevent dragging (because cell.setAttribute for some reason don't)
        cell.addEventListener('dragstart', e => {
            e.preventDefault();
        })

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
    fillGrid.addEventListener('click', fillGridFunc);
    gridSize.addEventListener('input', play);
    clearGrid.addEventListener('click', play);
}

play();