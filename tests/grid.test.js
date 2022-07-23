const Grid = require('../modules/grid.js');

test('constructs creates a grid of row x col', () => {
    const grid = new Grid(2, 3);
    expect(grid.grid.length).toBe(2);
    expect(grid.grid[0].length).toBe(3);
});

test('#at', () => {
    const grid = new Grid(2, 2);
    const cell1 = grid.at(0, 1);
    expect(cell1.row).toBe(0);
    expect(cell1.column).toBe(1);
    const cell2 = grid.at(3, 3);
    expect(cell2).toBe(null);
});

test('constructs with neighbours', () => {
    const grid = new Grid(2, 2);
    const cell = grid.at(1, 1);
    expect(cell.north).toBe(grid.at(0, 1));
    expect(cell.south).toBe(null);
    expect(cell.east).toBe(null);
    expect(cell.west).toBe(grid.at(1, 0));
});

test('#eachCell', () => {
    const grid = new Grid(2, 3);
    var counter = 0;
    cb = function() { counter++; }
    grid.eachCell(cb);
    expect(counter).toBe(6);
});

test('#randomCell', () => {
    const grid = new Grid(5, 1);
    const cell = grid.randomCell();
    expect(cell.row).toBeGreaterThanOrEqual(0);
    expect(cell.column).toBeGreaterThanOrEqual(0);
    expect(cell.row).toBeLessThanOrEqual(4);
    expect(cell.column).toBeLessThanOrEqual(0);
});
