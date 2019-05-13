import React, { Component } from "react";
import Todo from "./Todo";
import { make_todo } from "../actions";
import { connect } from "react-redux";
export class TodoContainer extends Component {
  state = {
    todo: ""
  };
  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };
  formSubmit = (e, makeTodo) => {
    e.preventDefault();

    makeTodo(this.state.todo);
  };
  render() {
    return (
      <div className="todo-container">
        {this.props.todo.map((todo, i) => {
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
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { make_todo }
)(TodoContainer);
