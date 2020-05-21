const db = require('../database');
const Sequelize = require('sequelize');

let Recipies = db.define('recipies', {
	recipie_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	recipie_name: {
		type: Sequelize.STRING,
		// allowNull: false,
	},
	cuisine_name: {
		type: Sequelize.STRING,
		// allowNull: false,
	},
	ingredients: {
		type: Sequelize.STRING(100000),
		// allowNull: false,
	},
	instructions: {
		type: Sequelize.STRING(100000),
		// allowNull: false,
	},
	image: {
		type: Sequelize.STRING(100000),
		// allowNull: false,
	},
});

db.sync().then((res) => {
	console.log('Recipie DB Created');
});

module.exports = Recipies;
