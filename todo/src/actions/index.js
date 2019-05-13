export const MAKE_TODO = 'MAKE_TODO';

export const make_todo = (str) => {
    // Fill in this function
    //get string from form submission newTodo: str
    return {
      type: MAKE_TODO,
      newTodo: `${str}`
    }
  };