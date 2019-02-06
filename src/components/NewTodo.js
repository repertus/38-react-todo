import React from 'react';
import '../App.css';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         task: '',
         priority: '',
         type: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A task was submitted: ' + this.state.task);
    event.preventDefault();
  }

  render() {
    return(
      <div id="new-todo" className="newTodo">
        <div className="addTodoText">
            <h4>Add Todo Item</h4>
        </div>
          <form>
            <Task />
            {/* <TaskPriority />
            <TaskType />
            <TodoBtn></TodoBtn> */}
          </form>
      </div>
    );
  }
}

export default NewTodo;