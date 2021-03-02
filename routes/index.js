
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

routes.get('/hello', (request, response) => {
  response.json({ info: 'Hello' })
})

export default routes;
