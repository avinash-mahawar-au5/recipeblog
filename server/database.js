const Sequelize = require('sequelize');

const db = new Sequelize('restaurant', 'postgres', '1234', {
	host: 'localhost',
	dialect: 'postgres',
});

db.authenticate().then(() => {
	console.log('DB connected Successfully');
});

module.exports = db;
