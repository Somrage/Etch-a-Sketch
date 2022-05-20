const table = document.querySelector('.table')
isDrawing = false

let grids = 20

for (let i = 0; i < grids*grids; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    table.appendChild(grid);
}

table.style.cssText = `grid-template-columns: repeat(${grids}, 1fr); grid-template-rows: repeat(${grids}, 1fr);`

const grid = document.querySelectorAll('.grid')

//allows to draw on grid only while mouse is pressed, although there is bug rarely activates mouse dragging instead of a function
function draw() {
    grid.forEach((cell) => {
        cell.addEventListener('mousedown', e => {
            isDrawing = true;
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