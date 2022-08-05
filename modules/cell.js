class Cell {
    row;
    column;
    north;
    south;
    east;
    west;
    distance;

    constructor(row, col) {
        this.row = row;
        this.column = col;
        this.links = [];
        this.onPath = false;
    }

    link(cell, bidi = true) {
        this.links.push(cell);
        if (bidi) {
            cell.link(this, false);
        }
    }

    unlink(cell, bidi = true) {
        this.links.splice(this.links.indexOf(cell), 1);
        if (bidi) {
            cell.unlink(this, false);
        }
    }

    linkedCells() {
        return this.links;
    }

    isLinked(cell) {
        return this.links.includes(cell);
    }

    neighbours() {
        const n = [];
        if (this.north) n.push(this.north);
        if (this.south) n.push(this.south);
        if (this.east) n.push(this.east);
        if (this.west) n.push(this.west);
        return n;
    }
}

//export { Cell };
module.exports = Cell;
