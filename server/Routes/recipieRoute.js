var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const Recipies = require('../Models/recipie');

router.get('/home', async (req, res) => {
	try {
		const { params } = req;
		// let recipies = await Recipies.findOne({ where: { recipie_id: params.id } });
		let recipies = await Recipies.findAll();

		res.send(recipies);
	} catch (error) {
		console.log(error);
	}
});

router.put('/home/:id', async (req, res) => {
	try {
		const { body, params } = req;

		let recipie = await Recipies.update(
			{
				recipie_name: body.recipie_name,
			},
			{
				where: { recipie_id: params.id },
			}
		);
		res.send('updated successfully');
	} catch (error) {
		console.log(error);
	}
});

router.delete('/home/:id', async (req, res) => {
	try {
		const { params } = req;
		let recipie = await Recipies.destroy({ where: { recipie_id: params.id } });
		res.send('Deleted Successfully');
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
