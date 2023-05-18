const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;
const MongoDB = require('./config/mongodb');
const Mongoose = require('./config/mongoose');
MongoDB();
Mongoose();

require('./routes/loan/Loan.routes')(app);

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
