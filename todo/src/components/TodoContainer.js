import React, { Component } from "react";
import Todo from "./Todo";
import { make_todo } from "../actions";
import { connect } from "react-redux";
export class TodoContainer extends Component {
  state = {
    todos: []
  };
  handleChange = e => {

    this.setState({
      todos: [...this.state.todos,{
        value: `${e.target.value}`,
        completed: false,
      }]
    });
  };
  formSubmit = (e, makeTodo) => {
    e.preventDefault();

    makeTodo(this.state.todos);
  };
  render() {
    console.log(this.props);
    
    return (
      <div className="todo-container">
        {this.props.todos.map((todo, i) => {
          console.log(todo)
          return <Todo todo={todo} key={i} />;
        })}
        <form onSubmit={e => this.formSubmit(e, this.props.make_todo)}>
          <input
            type="text"
            required
            placeholder="thisthing"
            onChange={this.handleChange}
            name="todo"
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
  { make_todo }
)(TodoContainer);
