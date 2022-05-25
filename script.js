const table = document.querySelector('.table');
const grid = document.querySelectorAll('.grid'); //later I reference grid with querySelector('.grid') again multiple times because its a live Nodelist
const clearGrid = document.querySelector('#clearGrid');
const fillGrid = document.querySelector('#fillGrid');
const bordersToggleBtn = document.querySelector('#bordersToggle');
const backgroundToggle = document.querySelector('#background');
const gridSize = document.getElementById('vol');
let isDrawing = false;

function makeGrid(gridSize) {
    deleteGrid();
    gridSize = document.getElementById('vol').value;
    for (let i = 0; i < gridSize*gridSize; i++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('grid', 'borders');
        table.appendChild(newGrid);
    }    
    
    table.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
}

function deleteGrid () {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}   

function fillGridFunc(grid, color) {
    grid = document.querySelectorAll('.grid');
    color = document.getElementById('colorPick').value;
    
    grid.forEach((cell) => {
        cell.style.cssText = `background-color: ${color}`;
    })
}

function borderToggle(grid) {
    grid = document.querySelectorAll('.grid');
    
    bordersToggleBtn.addEventListener('click', e => {
        grid.forEach((cell) => {
            cell.classList.toggle('borders');
        })
    })
}

function draw(grid) {
    grid = document.querySelectorAll('.grid');

    grid.forEach((cell) => {
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

backgroundToggle.addEventListener('click', () => {
    table.classList.toggle('table-image');
})

function play() {
    makeGrid();
    draw();
    borderToggle();
    fillGrid.addEventListener('click', fillGridFunc);
    gridSize.addEventListener('input', play);
    clearGrid.addEventListener('click', play);

}

play();