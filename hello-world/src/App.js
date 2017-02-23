import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {id: 1, name: "learn react", isChecked: true },
        {id: 2, name: "learn redux", isChecked: false },
        {id: 3, name: "learn python", isChecked: false }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="todo-app">
          <form action="">
            <input type="text"/>
          </form>
          <div className="todo-list">
            <ul>
              {this.state.todos.map(todo => <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isChecked}/>{todo.name}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
