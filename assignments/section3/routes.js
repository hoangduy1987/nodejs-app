const requestHandler = (request, response) => {
	const url = request.url;
	const method = request.method;

	// Home route
	if (url === '/') {
		response.write('<html>');
		response.write('<head><title>Welcome Text</title></head>');
		response.write(
			'<body><p>Welcome to my assigment Section 3</p><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Create</button></form></body>',
		);
		response.write('</head>');
		response.write('</html>');
		return response.end();
	}

	if (url === '/users') {
		response.write('<html>');
		response.write('<head><title>Use List</title></head>');
		response.write(
			'<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>',
		);
		response.write('</head>');
		response.write('</html>');
		return response.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];
		request.on('data', chunk => {
			body.push(chunk);
		});

		return request.on('end', () => {
			const parseBody = Buffer.concat(body).toString();
			console.log(parseBody);
			response.statusCode = 302;
			response.setHeader('Location', '/');
			return response.end();
		});
	}

	response.setHeader('Content-Type', 'text/html');
};

module.exports = requestHandler;
