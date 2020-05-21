var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const Recipies = require('../Models/recipie');

router.post('/add', async (req, res) => {
	try {
		const { body } = req;
		let recipies = await Recipies.create({
			recipie_name: body.recipie_name,
			cuisine_name: body.cuisine_name,
			ingredients: body.ingredients,
			instructions: body.instructions,
			image: body.image,
		});
		res.send(recipies);
		console.log('body data', body);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
