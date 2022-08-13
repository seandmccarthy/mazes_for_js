const Grid = require('./modules/grid.js');
const Sidewinder = require('./modules/sidewinder.js');
const Distances = require('./modules/distances.js');
const Path = require('./modules/path.js');

const rows = 50;
const cols = 50;

const GridOnCanvas = require('./modules/grid_on_canvas.js');
const grid = new Grid(rows, cols);
const maze = Sidewinder.on(grid);
const dist = new Distances(grid);
dist.calculateFrom(grid.at(0, 0));
Path.between(grid.at(0, 0), grid.at(rows - 1, cols - 1));

const canvas = document.getElementById('maze-canvas');
const ctx = canvas.getContext('2d');
GridOnCanvas(grid, canvas, dist.max);
