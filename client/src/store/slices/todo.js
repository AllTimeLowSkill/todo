import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
};

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  const response = await axios.get("http://localhost:8000/api/todo");
  return response.data;
});

export const createTodo = createAsyncThunk("todo/createTodo", async (data) => {
  const response = await axios.post("http://localhost:8000/api/todo", data);
  return response.data;
});

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, data }) => {
    const response = await axios.put(
      `http://localhost:8000/api/todo/${id}`,
      data
    );

    return response.data;
  }
);

export const compliteTodo = createAsyncThunk(
  "todo/changeStatis",
  async ({ id, complete }) => {
    const response = await axios.put(
      `http://localhost:8000/api/todo/status/${id}`,
      { complete }
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ id }) => {
    const response = await axios.delete(`http://localhost:8000/api/todo/${id}`);
    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      sessionStorage.setItem("todos", JSON.stringify(action.payload));
      state.isLoading = false;
    });
    build.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
      state.isLoading = false;
    });
    build.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
      state.isLoading = false;
    });
    build.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
      state.isLoading = false;
    });
    build.addCase(compliteTodo.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(compliteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
      state.isLoading = false;
    });
  },
});

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
