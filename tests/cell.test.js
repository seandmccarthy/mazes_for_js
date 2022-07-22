//import { Cell } from '../modules/cell.js';
const Cell = require('../modules/cell.js');

test('constructs with row and col', () => {
    const cell = new Cell(1, 2);
    expect(cell.row).toBe(1);
    expect(cell.column).toBe(2);
});

test('unidirectionally links a cell', () => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2, false);
    expect(cell1.linkedCells().length).toBe(1);
    expect(cell2.linkedCells().length).toBe(0);
    expect(cell1.linkedCells()[0]).toBe(cell2);
});

test('bidirectionally links a cell', () => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2, true);
    expect(cell1.linkedCells().length).toBe(1);
    expect(cell2.linkedCells().length).toBe(1);
    expect(cell1.linkedCells()[0]).toBe(cell2);
    expect(cell2.linkedCells()[0]).toBe(cell1);
});

test('unlinks a cell', () => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    cell1.link(cell2);
    expect(cell1.linkedCells().length).toBe(1);
    expect(cell2.linkedCells().length).toBe(1);
    cell1.unlink(cell2)
    expect(cell1.linkedCells().length).toBe(0);
    expect(cell2.linkedCells().length).toBe(0);
});

test('#isLinked', () => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    expect(cell1.isLinked(cell2)).toBeFalsy();
    cell1.link(cell2);
    expect(cell1.isLinked(cell2)).toBeTruthy();
});

test('#neighbours', () => {
    const cell1 = new Cell(1, 1);
    const cell2 = new Cell(2, 2);
    const cell3 = new Cell(3, 3);
    cell1.north = cell2;
    cell1.east = cell3;
    expect(cell1.neighbours()).toEqual([cell2, cell3]);
});
