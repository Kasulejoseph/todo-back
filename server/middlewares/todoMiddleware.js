
import models from '../models';
const { todos } = models

export const checkTodoExist = async (req, res, next) => {
  try {
    const { id } = req.params
    const todo = await todos.findOne({where: {id}})
    if (!todo) {
      throw 'todo not found';
    }
    req.todo = todo
    next()
  } catch (error) {
    return res.status(404).send({message: error})
  }
};
