const GridToASCII = (function(grid) {
    let s = "+" + "---+".repeat(grid.columns) + "\n";
    grid.eachRow(function(row) {
        let top = "|";
        let bottom = "+";

        row.forEach(function(cell) {
            if (cell == null) cell = new Cell(-1, -1);
            let body = "   ";
            let eastBnd = cell.isLinked(cell.east) ? " " : "|";
            top += body + eastBnd;
            let southBnd = cell.isLinked(cell.south) ? "   " : "---";
            bottom += southBnd + "+";
        });

        s += top + "\n";
        s += bottom + "\n";
    });

    return s;
});
module.exports = GridToASCII;
