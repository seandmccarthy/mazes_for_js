class Path {
    static between(startCell, endCell) {
        let current = endCell;
        endCell.onPath = true;
        while (current !== startCell) {
            for (let neighbour of current.links) {
                if (neighbour.distance < current.distance) {
                    neighbour.onPath = true;
                    current = neighbour;
                    break;
                }
            };
        }
    }
}
//export { Path };
module.exports = Path;
