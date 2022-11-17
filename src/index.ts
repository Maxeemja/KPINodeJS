import Server from './lib/Server.js';
import router from './routes/index.js';

const PORT = process.env.PORT || 8000;

const server = new Server();

server.use(router).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutdown = async () => {
  setTimeout(() => {
    console.error(
      'Could not close connections in time, forcefully shutting down'
    );
    process.exit(1);
  }, 10000);
  await server.shutdown();
  process.exit(0);
};

process.on('SIGINT', async () => {
  await shutdown();
});

process.on('SIGTERM', async () => {
  await shutdown();
});
