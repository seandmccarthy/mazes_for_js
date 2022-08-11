class Distances {
    constructor(grid) {
        this.grid = grid;
        this.max = 0;
        this.maxCell;
    }

    calculateFrom(startCell) {
        this.maxCell = startCell;
        startCell.distance = 0;
        let frontier = [ startCell ];

        while (frontier.length > 0) {
            let newFrontier = [];

            frontier.forEach(function(cell) {
                cell.linkedCells().forEach(function(linked) {
                    if (typeof linked.distance !== 'undefined') { return; }
                    linked.distance = cell.distance + 1;
                    if (linked.distance > this.max) {
                        this.max = linked.distance;
                        this.maxCell = linked;
                    }
                    newFrontier.push(linked);
                }, this);
            }, this);
            frontier = newFrontier;
        }
    }

    reset() {
        this.grid.eachCell(function (cell) {
            cell.distance = undefined;
        })
        this.max = 0;
        this.maxCell = undefined;
    }
}

//export { Distances };
module.exports = Distances;
