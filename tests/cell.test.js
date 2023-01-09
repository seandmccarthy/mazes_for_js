import test from 'ava'
import Cell from '../modules/cell.js';

test('constructs with row and col', t => {
    const cell = new Cell(1, 2);
    t.is(cell.row, 1);
    t.is(cell.column, 2);
});

test('unidirectionally links a cell', t => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2, false);
    t.is(cell1.links.length, 1);
    t.is(cell2.links.length, 0);
    t.is(cell1.links[0], cell2);
});

test('bidirectionally links a cell', t => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2, true);
    t.is(cell1.links.length, 1);
    t.is(cell2.links.length, 1);
    t.is(cell1.links[0], cell2);
    t.is(cell2.links[0], cell1);
});

test('unlinks a cell', t => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2);
    t.is(cell1.links.length, 1);
    t.is(cell2.links.length, 1);
    cell1.unlink(cell2)
    t.is(cell1.links.length, 0);
    t.is(cell2.links.length, 0);
});

test('#isLinked', t => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    t.falsy(cell1.isLinked(cell2));
    cell1.link(cell2);
    t.truthy(cell1.isLinked(cell2));
});

test('#neighbours', t => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    const cell3 = new Cell(3, 3);
    cell1.north = cell2;
    cell1.east = cell3;
    t.deepEqual(cell1.neighbours(), [cell2, cell3]);
});
