import http, { Server } from 'http';

export const createServer = (): Server =>
	http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World, this is 1st NodeJS lab by Vova and Max');
	});
