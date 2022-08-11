let args = process.argv.slice(2);
let rows = args[0] || 5;
let cols = args[1] || 5;
const Grid = require('./modules/grid.js');
const Distances = require('./modules/distances.js');
const Sidewinder = require('./modules/sidewinder.js');
const GridToASCII = require('./modules/grid_to_ascii.js');
const Path = require('./modules/path.js');

const grid = new Grid(rows, cols);
Sidewinder.on(grid);
const dist = new Distances(grid);
dist.calculateFrom(grid.at(rows - 1, 0));
Path.between(grid.at(rows - 1, 0), grid.at(rows - 1, cols - 1));

console.log(GridToASCII(grid));
console.log("Max distance: " + dist.max + ", at cell (" + dist.maxCell.row + ", " + dist.maxCell.column + ")");
console.log(GridToASCII(grid, "path"));
