const express = require('express');
const route = express.Router();

route.get('/', (request, response, next) => {
	response.send('<h1>Hello world</h1>');
});

module.exports = route;
