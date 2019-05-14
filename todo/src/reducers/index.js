import { MAKE_TODO } from "../actions";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  console.log(state.todos)
  switch (action.type) {
    case MAKE_TODO:
    console.log(action.nextTodo)
      return {
        todos: action.nextTodo
      };
    default:
      return state;
  }
};
