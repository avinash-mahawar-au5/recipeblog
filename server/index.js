const express = require('express');
const app = express();
const path = require('path');
var recipieRouter = require('./Routes/recipieRoute');
var cuisineRouter = require('./Routes/cuisineRoute');
var addRouter = require('./Routes/addRecipe');
editRouter = require('./Routes/editRoute');

const cors = require('cors');
// app.use(express.json());

app.use(cors());

app.use('/', recipieRouter);
app.use('/', cuisineRouter);
app.use('/', addRouter);
app.use('/', editRouter);

// Serve static asseser if in porduction

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
module.exports = app;
