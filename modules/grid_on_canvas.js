const GridOnCanvas = (function(grid, canvas, border = 5) {
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
});
module.exports = GridOnCanvas;
