export default function Path() {
}

Path.between = function(startCell, endCell) {
	let maxLoops = 1000;
	let current = endCell;
	endCell.onPath = true;
	while (current !== startCell && --maxLoops > 0) {
		for (let neighbour of current.links) {
			if (neighbour.distance < current.distance) {
				neighbour.onPath = true;
				current = neighbour;
				break;
			}
		};
	}
}