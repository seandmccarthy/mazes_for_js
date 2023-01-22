const AldousBroder = {
    on: function(grid) {
        let cell = grid.randomCell();
        let unvisited = grid.size() - 1;
        let maxLoops = grid.size() * 100;

        while (unvisited > 0) {
            const neighbour = cell.neighbours()[randInt(cell.neighbours().length)];
            if (neighbour.links.length === 0) {
                cell.link(neighbour);
                unvisited -= 1;
            }

            cell = neighbour;
        }

        return grid;
    }
}

const randInt = function(max) {
	return Math.floor(Math.random() * max);
}

export default AldousBroder;