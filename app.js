const http = require('http');

const server = http.createServer((request, response) => {
	console.log(request.url, request.method, request.headers);

	response.setHeader('Content-Type', 'text/html');
	response.
});

server.listen(3000);