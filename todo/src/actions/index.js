export const MAKE_TODO = 'MAKE_TODO';

export const make_todo = (todoObj) => {
    // Fill in this function
    //get string from form submission newTodo: str
    console.log(todoObj);
    
    return {
      type: MAKE_TODO,
      nextTodo: todoObj,
    }
  };