// import { logger } from './utils/logger';
import { PORT } from './config/preload.js';
import { createServer } from './config/server.js';

const app = createServer();

app.listen(PORT || 3002);
