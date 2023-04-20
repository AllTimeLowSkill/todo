const router = require("express-promise-router")();
const {
  getTodos,
  getTodo,
  updateTodo,
  createTodo,
  deleteTodo,
  todoStatus,
} = require("../services/todo.service");

router.route("/").get(getTodos);
router.route("/:id").get(getTodo);
router.route("/").post(createTodo);
router.route("/:id").put(updateTodo);
router.route("/status/:id").put(todoStatus);
router.route("/:id").delete(deleteTodo);

module.exports = router;
