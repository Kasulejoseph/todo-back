import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../api'; 

chai.use(chaiHttp);
chai.should();

const testTodoObj = {
  category: "test 1",
  description: "the easiest and fastest way to get started using Recharts.",
  dueDate: "2020-11-21"
}

const missingCategoryObj = {
  description: "the easiest and fastest way to get started using Recharts.",
  dueDate: "2020-11-21"
}



const createTodo = async (todoObj=testTodoObj) => {
  return await chai
    .request(app)
    .post('/todos/add')
    .send(todoObj);
};

const getOneTodo = async (id=1) => {
  return await chai
  .request(app)
  .get(`/todos/${id}`)
};

describe('TODO', () => {
  it('Should be able to add a new todo', async () => {
    const response = await createTodo();
    response.should.have.status(201);
    response.body.should.be.a('object');
    response.body.data.category.should.equal('test 1');
  });

  it('Should return a 400 when a field is missing', async () => {
    const response = await createTodo(missingCategoryObj);
    response.should.have.status(400);
    response.body.errors[0].msg.should.equal('Category is required');
  });

  it('Should be able to get a single todo', async () => {
    const response = await getOneTodo();
    response.should.have.status(200);
    response.body.todo.should.be.a('object');
    response.body.todo.category.should.equal('test test');
  })

  it('Should return a 404 when id is invalid', async () => {
    const response = await getOneTodo(1000);
    response.should.have.status(404);
    response.body.message.should.equal('todo not found');
  })

  it('Should be able to update a todo', async () => {
    const response = await chai
      .request(app)
      .put('/todos/1')
      .send({description: "Item has been completed",})
    response.should.have.status(200);
    response.body.message.should.equal('Successfully updated');
    const getTodo = await getOneTodo();
    getTodo.body.todo.description.should.equal('Item has been completed');
  });

  it('Should return a 400 when no field is updated', async () => {
    const response = await chai
      .request(app)
      .put('/todos/1')
      .send({tempory: "Item has been completed",})
    response.should.have.status(400);
    response.body.message.should.equal('No field was updated');
  });

  it('Should be able to get all todos', async () => {
    const response = await chai
      .request(app)
      .get('/todos');
    response.should.have.status(200);
    response.body.data.should.be.a('array');
    response.body.data[0].should.be.a('object');
    response.body.data.should.have.length(2);
  });

  it('Should be able to delete a todo', async () => {
    const response = await chai
      .request(app)
      .delete('/todos/2');
    response.should.have.status(200);
    response.body.message.should.equal('Todo has been successfully deleted');
    
    const getTodo = await getOneTodo(2);
    getTodo.should.have.status(404);
    getTodo.body.message.should.equal('todo not found');
  });


})
