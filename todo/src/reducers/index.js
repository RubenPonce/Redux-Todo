import { MAKE_TODO } from '../actions';

const initialState = {
    todo: []
  }

export default (state = initialState, action) => {
    
    
    switch(action.type){
        case MAKE_TODO: 
        console.log(action)
        return {
            todo: state.todo.concat(action.newTodo)
        }
        default: 
        return state;
    }
    
}