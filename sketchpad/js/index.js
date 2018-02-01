const container = document.querySelector('#container');
let size = 16;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    let squareSize = (960 / size).toString() + 'px';

    square.setAttribute('class', 'square');
    square.style.width = square.style.height = squareSize;
    container.appendChild(square);
  }
  sketchGrid();
}

function sketchGrid() {
  let squares = document.querySelectorAll('.square');

  squares.forEach(function(square) {
    square.addEventListener('mouseover', function(e) {
      e.target.style.background = '#2F4F4F';
    });
  });
}

function newGrid() {
  let newGrid = document.querySelector('#new-grid');

  newGrid.addEventListener('click', function(e) {
    size = prompt("Enter new grid size between 1-100");
    let squares = document.querySelectorAll('.square');

    squares.forEach(function(square) {
      container.removeChild(square);
    });
    createGrid(size);
  });
}

createGrid(size);
newGrid();
