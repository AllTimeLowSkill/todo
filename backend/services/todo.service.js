const { Todo } = require("../models/todo.model");

const todoServices = () => ({
  getTodo: async ({ params: { id } }, res) => {
    try {
      const todo = await Todo.findOne({ where: { id } });
      if (!todo) return res.status(403).send({ msg: "This todo not found" });
      return res.status(200).send(todo);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  },

  getTodos: async (_, res) => {
    try {
      const todos = await Todo.findAll();
      return res.status(200).send(todos);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  },

  createTodo: async ({ body }, res) => {
    try {
      const todo = await Todo.create(body);
      return res.status(200).send(todo);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  },

  updateTodo: async ({ params: { id }, body }, res) => {
    try {
      await Todo.update(
        {
          title: body.title,
          desc: body.desc,
        },
        {
          where: {
            id,
          },
        }
      );

      const todo = await Todo.findOne({
        where: {
          id,
        },
      });

      return res.status(200).send(todo);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  },

  deleteTodo: async ({ params: { id } }, res) => {
    try {
      await Todo.destroy({
        where: {
          id,
        },
      });

      const todos = await Todo.findAll();
      return res.status(200).send(todos);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  },

  todoStatus: async ({ params: { id }, body }, res) => {
    try {
      console.log(body);
      await Todo.update({ complite: body.complete }, { where: { id } });
      const todo = await Todo.findOne({ where: { id } });
      return res.status(200).send(todo);
    } catch (error) {
      return res.status(500).send({ msg: error });
    }
  },
});

module.exports = { ...todoServices() };
