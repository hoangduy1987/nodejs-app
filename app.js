const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

// Listen on port 3000
server.listen(3000);
