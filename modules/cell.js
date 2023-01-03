export default function Cell(row, column) {
    this.row = row;
    this.column = column;
    this.links = [];
    this.onPath = false;
    this.north = null;
    this.south = null;
    this.east = null;
    this.west = null;
    this.distance = null;
}

Cell.prototype.link = function(cell, bidi = true) {
    this.links.push(cell);
    if (bidi) {
        cell.link(this, false);
    }
}

Cell.prototype.unlink = function(cell, bidi = true) {
    this.links.splice(this.links.indexOf(cell), 1);
    if (bidi) {
        cell.unlink(this, false);
    }
}

Cell.prototype.isLinked = function(cell) {
    return this.links.includes(cell);
}

Cell.prototype.neighbours = function() {
    const n = [];
    if (this.north) n.push(this.north);
    if (this.south) n.push(this.south);
    if (this.east) n.push(this.east);
    if (this.west) n.push(this.west);
    return n;
}
