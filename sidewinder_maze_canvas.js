import Grid from './modules/grid.js';
import Sidewinder from './modules/sidewinder.js';
import Distances from './modules/distances.js';
import Path from './modules/path.js';
import GridOnCanvas from './modules/grid_on_canvas.js';

const rows = 50;
const cols = 50;

const grid = new Grid(rows, cols);
Sidewinder(grid);
const dist = new Distances(grid);
const startCell = grid.at(0, 0);

dist.calculateFrom(startCell);
const newStart = dist.maxCell;
console.log("Max: " + dist.maxCell.row + ", " + dist.maxCell.column);
dist.reset();
dist.calculateFrom(newStart);
const goal = dist.maxCell;

Path.between(newStart, goal);
//Path.between(grid.at(rows - 1, 0), grid.at(rows - 1, cols - 1));

const canvas = document.getElementById('maze-canvas');
const ctx = canvas.getContext('2d');
GridOnCanvas(grid, canvas, dist.max);
