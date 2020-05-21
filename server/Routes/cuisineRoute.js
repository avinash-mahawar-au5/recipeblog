var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const Cuisines = require('../Models/cuisine');

router.get('/cuisines', async (req, res) => {
	try {
		let cuisines = await Cuisines.findAll();
		res.send(cuisines);
	} catch (error) {
		console.log(error);
	}
});

router.post('/cuisines', async (req, res) => {
	try {
		const { body } = req;

		let cuisines = await Cuisines.create({
			cuisine_name: body.cuisine_name,
		});
		res.send(cuisines);
		console.log('body data', body);
	} catch (error) {
		console.log(error);
	}
});

router.put('/cuisines/:id', async (req, res) => {
	try {
		const { body, params } = req;

		let cuisines = await Cuisines.update(
			{
				cuisine_name: body.cuisine_name,
			},
			{
				where: { cuisine_id: params.id },
			}
		);
		res.send('updated successfully');
	} catch (error) {
		console.log(error);
	}
});

router.delete('/cusines/:id', async (req, res) => {
	try {
		const { params } = req;
		let cusines = await Cusines.destroy({ where: { cusine_id: params.id } });
		res.send('Deleted Successfully');
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
