const Grid = require('../modules/grid.js');

test('constructs creates a grid of row x col', () => {
    const grid = new Grid(2, 3);
    expect(grid.grid.length).toBe(2);
    expect(grid.grid[0].length).toBe(3);
});

test('#each_cell', () => {
    const grid = new Grid(2, 3);
    var counter = 0;
    cb = function() {
        counter++;
    }
    grid.each_cell(cb);
    expect(counter).toBe(6);
});
