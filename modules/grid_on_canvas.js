function colourFor(cell, max) {
	const intensity = (max - cell.distance) / max;
	const dark = Math.round(255 * intensity);
	const bright = 128 + Math.round(127 * intensity);
	if (cell.onPath) {
		return "rgb(0, 200, 0)";
	} else if (typeof cell.distance !== 'undefined') {
		return "rgb(" + dark + ", " + dark + ", " + bright + ")";
	}
	return "rgb(255, 255, 255)";
}

export default function GridOnCanvas(grid, canvas, maxDistance) {
	const width = canvas.width;
	const height = canvas.height;
	const cellSize = width < height ? Math.floor(width / grid.columns) : Math.floor(height / grid.rows);

	const ctx = canvas.getContext('2d');

	ctx.beginPath();
	grid.eachCell(function(cell) {
		let x1 = cell.column * cellSize;
		let y1 = cell.row * cellSize;
		let x2 = (cell.column + 1) * cellSize;
		let y2 = (cell.row + 1) * cellSize;

		ctx.fillStyle = colourFor(cell, maxDistance);
		ctx.fillRect(x1, y1, cellSize, cellSize);

		if (!cell.north) {
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y1);
		}
		if (!cell.west) {
			ctx.moveTo(x1, y1);
			ctx.lineTo(x1, y2);
		}
		if (!cell.isLinked(cell.east)) {
			ctx.moveTo(x2, y1);
			ctx.lineTo(x2, y2);
		}
		if (!cell.isLinked(cell.south)) {
			ctx.moveTo(x1, y2);
			ctx.lineTo(x2, y2);
		}
	});
	ctx.stroke();
}