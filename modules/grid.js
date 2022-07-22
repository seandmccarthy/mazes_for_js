//import { Cell } from './cell.js'
const Cell = require('./cell.js');

class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.columns = cols
        this.grid = this.prepareGrid();
        this.configureCells();
    }

    prepareGrid() {
        const g = new Array(this.rows);
        for (var row = 0; row < this.rows; row++) {
            g[row] = new Array(this.columns);
            for (var col = 0; col < this.columns; col++) {
                g[row][col] = new Cell(row, col);
            }
        }
        return g;
    }

    configureCells() {
    }

    each_row(cb) {
        this.grid.forEach(row => cb(row));
    }

    each_cell(cb) {
        this.each_row(function(row) {
            row.forEach(cell => cb(cell));
        })
    }
}

//export { Grid };
module.exports = Grid;
