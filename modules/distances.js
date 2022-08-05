class Distances {
    static on(grid, startRow, startCol) {
        let cell = grid.at(startRow, startCol)
        cell.distance = 0;
        let frontier = [ cell ];

        while (frontier.length > 0) {
            let newFrontier = [];
            
            frontier.forEach(function(cell) {
                cell.linkedCells().forEach(function(linked) {
                    if (typeof linked.distance !== 'undefined') { return; }
                    linked.distance = cell.distance + 1;
                    newFrontier.push(linked);
                });
            });
            frontier = newFrontier;
        }
    }
}

//export { Distances };
module.exports = Distances;
