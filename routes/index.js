
import { Router } from 'express';
import { addTodo } from '../controllers/todoController'
import { validateTodo, validations } from '../middlewares/validations'


const routes = Router();

routes.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

routes.post('/add', validateTodo, validations, addTodo)

export default routes;
