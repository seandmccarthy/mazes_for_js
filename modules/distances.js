export default function Distances(grid) {
	this.grid = grid;
	this.max = 0;
	this.maxCell = null;
}

Distances.prototype.calculateFrom = function(startCell) {
	this.maxCell = startCell;
	startCell.distance = 0;
	let frontier = [ startCell ];

	while (frontier.length > 0) {
		let newFrontier = [];

		frontier.forEach(function(cell) {
			cell.links.forEach(function(linked) {
				if (linked.distance !== null) { return; }
				linked.distance = cell.distance + 1;
				if (linked.distance > this.max) {
					this.max = linked.distance;
					this.maxCell = linked;
				}
				newFrontier.push(linked);
			}, this);
		}, this);
		frontier = newFrontier;
	}
}

Distances.prototype.reset = function() {
	this.grid.eachCell(function (cell) {
		cell.distance = null;
	})
	this.max = 0;
	this.maxCell = null;
}