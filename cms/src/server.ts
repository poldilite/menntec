import express from 'express';
import payload from 'payload';
import path from 'path';

const app = express();

// Redirect root to admin
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'dev-secret',
    express: app,
    onInit: async (_cms) => {
      payload.logger.info(`Payload CMS initialized`);
    },
  });

  // Add your routes here
  app.listen(3000, () => {
    payload.logger.info('CMS is running at http://localhost:3000');
  });
};

start().catch((err) => {
  payload.logger.error(err);
  process.exit(1);
});
