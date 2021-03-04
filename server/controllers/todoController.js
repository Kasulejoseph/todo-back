import models from "../models";
const { todos } = models;

export const addTodo = async (req, res) => {
  const { category, description, dueDate } = req.body;
  const newTodo = {
    category,
    description,
    dueDate,
    status: "pending"
  };
  const data = await todos.create(newTodo);
  return res.status(201).send({ status: 201, data });
};

export const getOneTodo = async (req, res) => {
  const todo = req.todo;
  return res.status(200).send({ status: 200, todo });
};

export const getAllTodo = async (req, res) => {
  const queryParams = req.query ? req.query : {};
  const order = [['createdAt', 'DESC']]
  const data = await todos.findAll({
    where: queryParams,
    order
  });
  return res.status(200).send({ status: 200, data });
};

export const updateTodo = async (req, res) => {
  const { id } = req.todo;
  const dataToUpdate = req.body;
  const newTodo = { ...dataToUpdate };
  const [updatedTodo] = await todos.update(newTodo, {
    where: { id },
    returning: true,
  });
  if (updatedTodo == 0) {
    return res
      .status(400)
      .send({ status: 400, message: "No field was updated" });
  }
  return res.status(200).send({ status: 200, message: "Successfully updated" });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.todo;
  await todos.destroy({
    where: { id },
  });
  return res
    .status(200)
    .send({ status: 200, message: "Todo has been successfully deleted" });
};
