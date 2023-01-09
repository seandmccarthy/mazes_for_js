import test from 'ava'
import Grid from '../modules/grid.js';
import Distances from '../modules/distances.js'

test('#calculateFrom', t => {
    const grid = new Grid(3, 3);
    grid.at(0, 0).link(grid.at(0, 1));
    grid.at(0, 1).link(grid.at(0, 2));
    const dist = new Distances(grid);
    dist.calculateFrom(grid.at(0, 0));
    const cell = grid.at(0, 2);
    t.is(cell.distance, 2);
});
