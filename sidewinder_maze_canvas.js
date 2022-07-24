const Grid = require('./modules/grid.js');
const Sidewinder = require('./modules/sidewinder.js');
const GridOnCanvas = require('./modules/grid_on_canvas.js');
const grid = new Grid(50, 50);
const maze = Sidewinder.on(grid);
const canvas = document.getElementById('maze-canvas');
const ctx = canvas.getContext('2d');
GridOnCanvas(grid, canvas);
