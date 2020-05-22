const Sequelize = require('sequelize');

// const db = new Sequelize('restaurant', 'postgres', '1234', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// });

const db = new Sequelize(
	'postgres://gkabrlqu:uZMmEbalGdtTIw-x77CbznmfBHQowmft@rajje.db.elephantsql.com:5432/gkabrlqu'
);

db.authenticate().then(() => {
	console.log('DB connected Successfully');
});

module.exports = db;
