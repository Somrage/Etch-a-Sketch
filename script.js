const table = document.querySelector('.table')

let grids = 20

for (let i = 0; i < grids*grids; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    table.appendChild(grid);
}

table.style.cssText = `grid-template-columns: repeat(${grids}, 1fr); grid-template-rows: repeat(${grids}, 1fr);`

const grid = document.querySelectorAll('.grid')

let isDrawing = false;

function draw() {
    if (isDrawing === true) {
        grid.forEach((cell) => {
            cell.addEventListener('mousemove', () => {
                cell.style.cssText = 'background-color: #000000';
            })
        });
    }
}

grid.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        draw();
        });
});