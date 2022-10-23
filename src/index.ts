import { logger } from './utils/logger';
import { PORT, HOSTNAME } from './config/preload';
import { createServer } from './config/server';
import http from "http";

// const app = createServer();
//
// app.listen(PORT || 3000, HOSTNAME as any, () => {
// 	logger.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });

http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
}).listen(PORT)