import express, { request, response } from 'express';

import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello David!' }));

app.listen(3333, () => {
  console.log('The server is running on port 3333!');
});
