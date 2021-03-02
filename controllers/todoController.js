
import models from '../models';
const { todos }  = models;

export const addTodo =  async (req, res) => {
  const { category, description, dueDate } = req.body
  const newTodo = {
    category,
    description,
    dueDate
  }
  const data = await todos.create(newTodo);
  return res.status(201).send({ status: 201, data });
}
