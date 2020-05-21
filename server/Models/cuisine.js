const db = require('../database');
const Sequelize = require('sequelize');

let Cuisines = db.define('cusines', {
	cuisine_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	cuisine_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

db.sync().then((res) => {
	console.log('Cusine DB Created');
});

module.exports = Cuisines;
