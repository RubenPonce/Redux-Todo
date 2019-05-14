import { MAKE_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TODO:
    console.log(action.nextTodoArr)
    console.log(state)
      return {
        todos: state.todos.concat( action.nextTodoArr)
      };
    case TOGGLE_COMPLETED:
      
      return {
        todos: state.todos.map(todo => {
          console.log(todo)
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else{
            return {...todo}
          }
        })
      };
    default:
      return state;
  }
};
