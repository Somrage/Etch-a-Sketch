const table = document.querySelector('.table')

let grids = 50

for (let i = 0; i < grids; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    table.appendChild(grid);
}