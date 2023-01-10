import Grid from './modules/grid.js';
import Sidewinder from './modules/sidewinder.js';
import Distances from './modules/distances.js';
import Path from './modules/path.js';
import MazeOnCanvas from './modules/maze_on_canvas.js';

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

function colourFor(cell) {
	const intensity = (dist.max - cell.distance) / dist.max;
	const dark = Math.round(255 * intensity);
	const bright = 128 + Math.round(127 * intensity);
	if (cell.onPath) {
		return "rgb(0, 200, 0)";
	} else if (typeof cell.distance !== 'undefined') {
		return "rgb(" + dark + ", " + dark + ", " + bright + ")";
	}
	return "rgb(255, 255, 255)";
}

new MazeOnCanvas(canvas).from(grid, colourFor);
