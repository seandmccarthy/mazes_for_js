export default function MazeOnCanvas(canvas) {
	this.canvas = canvas;
}

MazeOnCanvas.prototype.from = function(grid, colourFn) {
	const width = this.canvas.width;
	const height = this.canvas.height;
	const cellSize = width < height ? Math.floor(width / grid.columns) : Math.floor(height / grid.rows);
	const ctx = this.canvas.getContext('2d');

	ctx.beginPath();
	grid.eachCell((cell, maxDistance) => {
		let x1 = cell.column * cellSize;
		let y1 = cell.row * cellSize;
		let x2 = (cell.column + 1) * cellSize;
		let y2 = (cell.row + 1) * cellSize;

		ctx.fillStyle = colourFn(cell);
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
