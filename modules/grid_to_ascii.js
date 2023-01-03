function distBody(cell) {
	if (typeof cell.distance !== 'undefined') {
		return " " + cell.distance.toString(36) + " ";
	}
	return "   ";
}

function pathBody(cell) {
	if (cell.onPath) {
		return " " + cell.distance.toString(36) + " ";
	}
	return "   ";
}

export default function GridToASCII(grid, bodyFunction = "distance") {
	let s = "+" + "---+".repeat(grid.columns) + "\n";
	grid.eachRow(function(row) {
		let top = "|";
		let bottom = "+";

		row.forEach(function(cell) {
			if (cell == null) cell = new Cell(-1, -1);
			let body = bodyFunction == "distance" ? distBody(cell) : pathBody(cell);
			let eastBnd = cell.isLinked(cell.east) ? " " : "|";
			top += body + eastBnd;
			let southBnd = cell.isLinked(cell.south) ? "   " : "---";
			bottom += southBnd + "+";
		});

		s += top + "\n";
		s += bottom + "\n";
	});

	return s;
};