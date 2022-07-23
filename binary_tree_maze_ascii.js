const Grid = require('./modules/grid.js');
const BinaryTree = require('./modules/binary_tree.js');

const grid = new Grid(5, 5);
const maze = BinaryTree.on(grid);
console.log(grid.toString());
