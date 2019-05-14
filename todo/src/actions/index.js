export const MAKE_TODO = 'MAKE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const make_todo = (todoObj) => {
    // Fill in this function
    //get string from form submission newTodo: str
    console.log(todoObj);
    
    return {
      type: MAKE_TODO,
      nextTodoArr: todoObj,
    }
  };

  export const toggle_completed = (e,todoObj) =>{
    e.preventDefault();
    console.log(todoObj)
    return {
      type: TOGGLE_COMPLETED,
      payload: todoObj.id,
    }
  }