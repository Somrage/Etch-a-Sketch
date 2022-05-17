const table = document.querySelector('.table')

let grids = 15

for (let i = 0; i < grids*grids; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    table.appendChild(grid);
}

table.style.cssText = `grid-template-columns: repeat(${grids}, 1fr); grid-template-rows: repeat(${grids}, 1fr);`