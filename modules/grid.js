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
        this.eachCell((cell) => {
            const row = cell.row;
            const col = cell.column;
            cell.north = this.at(row - 1, col);
            cell.south = this.at(row + 1, col);
            cell.west = this.at(row, col - 1);
            cell.east = this.at(row, col + 1);
        });
    }

    at(row, col) {
        if (row < 0 || row >= this.rows) {
            return null;
        }
        if (col < 0 || col >= this.grid[row].length) {
            return null;
        }
        return this.grid[row][col];
    }

    randomCell(randFunc = randInt) {
        const row = randFunc(this.rows)
        const col = randFunc(this.grid[row].length)
        return this.at(row, col);
    }

    size() {
        return this.rows * this.columns;
    }

    eachRow(cb) {
        this.grid.forEach(row => cb(row));
    }

    eachCell(cb) {
        this.eachRow(function(row) {
            row.forEach(cell => cb(cell));
        })
    }
}

const randInt = function(max) {
    return Math.floor(Math.random() * max);
}

//export { Grid };
module.exports = Grid;
