const BinaryTree = {
    on: function(grid) {
        grid.eachCell(function(cell) {
            const neighbours = [];
            if (cell.north) neighbours.push(cell.north);
            if (cell.east) neighbours.push(cell.east);

            if (neighbours.length > 0) {
                cell.link(neighbours[randInt(neighbours.length)]);
            }
        });
        return grid;
    }
}

const randInt = function(max) {
	return Math.floor(Math.random() * max);
}

export default BinaryTree;