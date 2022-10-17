import { logger } from './utils/logger';
import { PORT, HOSTNAME } from './config/preload';
import { createServer } from './config/server';

const app = createServer();

app.listen(PORT || 3000, HOSTNAME as any, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

process.on('unhandledRejection', (error: Error) => {
	logger.error('unhandledRejection', error.message);
});
