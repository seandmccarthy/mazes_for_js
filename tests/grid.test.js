import test from 'ava'
import Grid from '../modules/grid.js';

test('constructs creates a grid of row x col', t => {
    const grid = new Grid(2, 3);
    t.is(grid.grid.length, 2);
    t.is(grid.grid[0].length, 3);
});

test('#at', t => {
    const grid = new Grid(2, 2);
    const cell1 = grid.at(0, 1);
    t.is(cell1.row, 0);
    t.is(cell1.column, 1);
    const cell2 = grid.at(3, 3);
    t.is(cell2, null);
});

test('constructs with neighbours', t => {
    const grid = new Grid(2, 2);
    const cell = grid.at(1, 1);
    t.is(cell.north, grid.at(0, 1));
    t.is(cell.south, null);
    t.is(cell.east, null);
    t.is(cell.west, grid.at(1, 0));
});

test('#eachCell', t => {
    const grid = new Grid(2, 3);
    let counter = 0;
    const cb = function() { counter++; }
    grid.eachCell(cb);
    t.is(counter, 6);
});

test('#randomCell', t => {
    const grid = new Grid(5, 1);
    const cell = grid.randomCell();
    t.true(cell.row >= 0);
    t.true(cell.column >= 0);
    t.true(cell.row <= 4);
    t.true(cell.column <= 0);
});
