import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            currentTodo: ''
        };

        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTodo() {
        let prevTodos = [...this.state.todos];
        prevTodos.push(this.state.currentTodo || '');
        this.setState({
            todos: prevTodos,
            currentTodo: '',
        })
    }

    handleChange(event) {
        this.setState({
            currentTodo: event.target.value || ''
        });
    }

    render() {
        return <div className="container">
            <h2>Todos</h2>
            <input onChange={this.handleChange} value={this.state.currentTodo} />
            <button onClick={this.addTodo}>Add Todo</button>
            <ul>
              {this.state.todos.map(item => <li key={Math.random()}>{item}</li>)}
            </ul>
        </div>
    }
}

export default TodoList;
