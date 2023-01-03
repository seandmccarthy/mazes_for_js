let args = process.argv.slice(2);
let rows = args[0] || 10;
let cols = args[1] || 10;
const Grid = require('./modules/grid.js');
const BinaryTree = require('./modules/binary_tree.js');

const grid = new Grid(rows, cols);
BinaryTree(grid);
console.log(grid.toString());
