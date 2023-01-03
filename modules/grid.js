import Cell from './cell.js'

export default function Grid(rows, cols) {
	this.rows = rows;
	this.columns = cols
	this.grid = this._prepareGrid();
	this._configureCells();
}

Grid.prototype._prepareGrid = function() {
	const g = new Array(this.rows);
	for (var row = 0; row < this.rows; row++) {
		g[row] = new Array(this.columns);
		for (var col = 0; col < this.columns; col++) {
			g[row][col] = new Cell(row, col);
		}
	}
	return g;
}

Grid.prototype._configureCells = function() {
	this.eachCell((cell) => {
		const row = cell.row;
		const col = cell.column;
		cell.north = this.at(row - 1, col);
		cell.south = this.at(row + 1, col);
		cell.west = this.at(row, col - 1);
		cell.east = this.at(row, col + 1);
	});
}

Grid.prototype.at = function(row, col) {
	if (row < 0 || row >= this.rows) {
		return null;
	}
	if (col < 0 || col >= this.grid[row].length) {
		return null;
	}
	return this.grid[row][col];
}

Grid.prototype.randomCell = function(randFunc = randInt) {
	const row = randFunc(this.rows)
	const col = randFunc(this.grid[row].length)
	return this.at(row, col);
}

Grid.prototype.size = function() {
	return this.rows * this.columns;
}

Grid.prototype.eachRow = function(cb) {
	this.grid.forEach(row => cb(row));
}

Grid.prototype.eachCell = function(cb) {
	this.eachRow(function(row) {
		row.forEach(cell => cb(cell));
	})
}

const randInt = function(max) {
	return Math.floor(Math.random() * max);
}