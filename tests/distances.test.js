const Grid = require('../modules/grid.js');
const Distances = require('../modules/distances.js');

test('#on', () => {
    const grid = new Grid(3, 3);
    grid.at(0, 0).link(grid.at(0, 1));
    grid.at(0, 1).link(grid.at(0, 2));
    Distances.on(grid, 0, 0);
    const cell = grid.at(0, 2);
    expect(cell.distance).toBe(2);
});
