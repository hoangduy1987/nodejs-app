const http = require('http');

const routes = require('./routes');
// const routes = require('./assignments/section3/routes');

const server = http.createServer(routes);

// Listen on port 3000
server.listen(3000);
