import { useEffect, useMemo, useState } from "react";
import TodoList from "./components/todoList";
import AddTodoForm from "./components/addTodoForm";
import InputControl from "./components/input";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, setTodos } from "./store/slices/todo";

function App() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem("todos"));
    if (session) {
      dispatch(setTodos(session));
    } else {
      dispatch(getTodos());
    }
  }, []);

  const todosMemo = useMemo(
    () =>
      todos.filter((item) =>
        item.title.toLowerCase().includes(todoTitle.toLowerCase())
      ),
    [todoTitle, todos]
  );

  return (
    <div>
      <InputControl
        type="search"
        onChange={setTodoTitle}
        placeholder="Search todo"
        sx={{ width: "w-full", margin: "mb-[18px]" }}
      />
      <AddTodoForm />
      <TodoList todos={todosMemo} />
    </div>
  );
}

export default App;
