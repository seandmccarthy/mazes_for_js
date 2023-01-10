import * as THREE from '../lib/three.module.js';

export default function Maze3D(scene, grid) {
	const wallSize = 50;
	const wallWidth = 0.1 * wallSize;
	const NINETY_DEGREES = Math.PI / 2;

	const gridMiddle = (grid.rows * wallSize + wallWidth) / 2;
	const light = new THREE.PointLight(0xffffff);
	light.position.set(gridMiddle, 100, gridMiddle);
	scene.add(light);

	function Wall(size = wallSize + wallWidth, thickness = wallWidth, c = 0x0095ff) {
		const boxGeometry = new THREE.BoxGeometry(size, size, thickness);
		const material = new THREE.MeshLambertMaterial({ color: c });
		return new THREE.Mesh(boxGeometry, material);
	}

	const floor = Wall(grid.rows * wallSize + wallWidth, wallWidth, 0xaa0011);
	floor.position.x = (0.5 * wallSize * (grid.rows - 1));
	floor.position.y = (-0.5 * wallSize) - (0.5 * wallWidth);
	floor.position.z = (0.5 * wallSize * (grid.rows));
	floor.rotation.set(Math.PI / 2, 0, 0);
	scene.add(floor);

	grid.eachCell(function (cell) {
		let x = cell.column * wallSize;
		let y = cell.row * wallSize;

		if (!cell.north) {
			const w = Wall();
			w.position.x = x;
			w.position.z = y;
			scene.add(w);
		}
		if (!cell.west) {
			const w = Wall();
			w.rotation.set(0, NINETY_DEGREES, 0);
			w.position.x = x - (0.5 * wallSize);
			w.position.z = y + (0.5 * wallSize);
			scene.add(w);
		}
		if (!cell.isLinked(cell.east)) {
			const w = Wall();
			w.rotation.set(0, NINETY_DEGREES, 0);
			w.position.x = x + (0.5 * wallSize);
			w.position.z = y + (0.5 * wallSize);
			scene.add(w);
		}
		if (!cell.isLinked(cell.south)) {
			const w = Wall();
			w.position.x = x;
			w.position.z = y + wallSize;
			scene.add(w);
		}
	});
}