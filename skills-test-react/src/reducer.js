import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            todo: action.payload,
          }
        ]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    default:
      return state;
  }
}

export const addToDo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
})

const selectTodoItems = (state) => state.todos;

export const selectTodos = createSelector(selectTodoItems, (items) => Object.values(items));
