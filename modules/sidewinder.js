const Sidewinder = {
    on: function(grid) {
        grid.eachRow(function(row) {
            let run = [];

            row.forEach(function(cell) {
                run.push(cell);

                let atEastBnd = cell.east === null;
                let atNorthBnd = cell.north === null;

                let shouldCloseOut = atEastBnd ||
                    (!atNorthBnd && (randInt(2) == 0));

                if (shouldCloseOut) {
                    let member = run[randInt(run.length)];
                    if (member.north) {
                        member.link(member.north);
                    }
                    run = [];
                }
                else
                {
                    cell.link(cell.east);
                }
            });
        });
        return grid;
    }
}

const randInt = function(max) {
	return Math.floor(Math.random() * max);
}

export default Sidewinder;
