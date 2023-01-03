import Grid from './modules/grid.js';
import Path from './modules/path.js';
import Distances from './modules/distances.js';
import BinaryTree from './modules/binary_tree.js';
import GridToASCII from './modules/grid_to_ascii.js';

const grid = new Grid(5, 5);
BinaryTree(grid);

const dist = new Distances(grid);
//const startCell = grid.at(grid.rows - 1, 0);
const startCell = grid.at(0, 0);
dist.calculateFrom(startCell);
const newStart = dist.maxCell;
console.log("Max distance: " + dist.max + ", at cell (" + dist.maxCell.row + ", " + dist.maxCell.column + ")");
console.log(GridToASCII(grid));
dist.reset();

dist.calculateFrom(newStart);
console.log("Max distance: " + dist.max + ", at cell (" + dist.maxCell.row + ", " + dist.maxCell.column + ")");
console.log(GridToASCII(grid));
const goal = dist.maxCell;

Path.between(newStart, goal);
console.log("Longest path:");
console.log(GridToASCII(grid, "path"));
