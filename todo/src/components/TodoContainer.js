import React, { Component } from "react";
import Todo from "./Todo";
import { make_todo, toggle_completed } from "../actions";
import { connect } from "react-redux";
export class TodoContainer extends Component {
  state = {
    todos: [],
    inputValue: ''
  };
  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  
  formSubmit = (e, makeTodo) => {
    e.preventDefault();
    console.log(e.target.todo.value)
    this.setState({
      inputValue: '',
    });
    makeTodo([...this.state.todos,{
      value: e.target.todo.value,
      completed: false,
      id: Date.now(),
      
    }]);
  };
  
  render() {
    console.log(this.props);
    
    return (
      <div className="todo-container">
        {this.props.todos.map((todo, i) => {
          console.log(todo)
          return <Todo todo={todo} toggleCompleted = {(e)=>this.props.toggle_completed(e,todo)} key={i} />;
        })}

        <form onSubmit={e => this.formSubmit(e, this.props.make_todo)}>
          <input
            type="text"
            required
            placeholder="thisthing"
            onChange={this.handleChange}
            name="todo"
            value={this.state.inputValue}
          />
          <button>add banana</button>
        </form>
        <button>clear todo</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { make_todo, toggle_completed }
)(TodoContainer);
