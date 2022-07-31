let args = process.argv.slice(2);
let rows = args[0] || 10;
let cols = args[1] || 10;
const Grid = require('./modules/grid.js');
const Sidewinder = require('./modules/sidewinder.js');
const GridToASCII = require('./modules/grid_to_ascii.js');

const grid = new Grid(rows, cols);
const maze = Sidewinder.on(grid);
console.log(GridToASCII(grid));
