
import { Router } from 'express';
import { addTodo, getOneTodo, getAllTodo, updateTodo, deleteTodo } from '../controllers/todoController'
import { validateTodo, validations } from '../middlewares/validations'
import { checkTodoExist } from '../middlewares/todoMiddleware';
import errorHandler from '../helpers/errorHandler';


const routes = Router();

routes.get('/', (request, response) => {
  response.json({ info: 'Welcome, Get your todo list done today.' })
})
routes.get('/todos', errorHandler(getAllTodo))
routes.post('/todos/add', validateTodo, validations, errorHandler(addTodo))
routes.get('/todos/:id', checkTodoExist, validations, errorHandler(getOneTodo))
routes.put('/todos/:id', checkTodoExist, validations, errorHandler(updateTodo))
routes.delete('/todos/:id', checkTodoExist, validations, errorHandler(deleteTodo))

export default routes;
