import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: "Hello David!"})
});

app.listen(3333, () => {
  console.log("The server is running on port 3333!");
});