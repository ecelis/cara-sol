const n = Math.random();

const caraCruz = function () {
	let r = '';
	n < 0.5 ? r = 'Cara' : r = 'Cruz';
	return r;
}

module.exports.caraCruz = caraCruz;

