import Todo from "../todo";

const TodoList = ({ todos = [] }) => {
  if (todos.length === 0) {
    return (
      <div>
        <h1>No tasks</h1>
      </div>
    );
  } else {
    return (
      <section className="mt-[28px]">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            desc={todo.desc}
            complite={todo.complite}
            createdAt={todo.createdAt}
          />
        ))}
      </section>
    );
  }
};

export default TodoList;
