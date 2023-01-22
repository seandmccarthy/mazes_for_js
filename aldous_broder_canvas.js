import Grid from './modules/grid.js';
import AldousBroder from './modules/aldous_broder.js';
import Distances from './modules/distances.js';
import Path from './modules/path.js';
import MazeOnCanvas from './modules/maze_on_canvas.js';

const rows = 30;
const cols = 30;

const grid = new Grid(rows, cols);
AldousBroder.on(grid);
const dist = new Distances(grid);
const startCell = grid.at(0, 0);
dist.calculateFrom(startCell);
const farthestCell = dist.maxCell;
Path.between(startCell, farthestCell);
//Path.between(grid.at(rows - 1, 0), grid.at(rows - 1, cols - 1));

const canvas = document.getElementById('maze-canvas');

function colourFor(cell) {
	const intensity = (dist.max - cell.distance) / dist.max;
	const dark = Math.round(255 * intensity);
	const bright = 128 + Math.round(127 * intensity);
	if (cell.onPath) {
		return "rgb(200, 200, 0)";
	} else if (typeof cell.distance !== 'undefined') {
		return "rgb(" + dark + ", " + bright + ", " + dark + ")";
	}
	return "rgb(255, 255, 255)";
}

new MazeOnCanvas(canvas).from(grid, colourFor);
