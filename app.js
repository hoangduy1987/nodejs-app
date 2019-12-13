// const http = require('http');
// const routes = require('./routes');
// const routes = require('./assignments/section3/routes');

// const server = http.createServer(app);

// Listen on port 3000
// server.listen(3000);

// using express.js
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// Handel 404
app.use((request, response, next) => {
	response.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);
