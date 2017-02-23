import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //constructor method
  constructor() {
    super();
    this.state = {
      cat: 2,
      text: "React Todos",
      todos: [
        {id: 1, name: "learn react", isChecked: true },
        {id: 2, name: "learn redux", isChecked: false },
        {id: 3, name: "learn python", isChecked: false }
      ]
    }
  }

  //custom method of component
  update(e ){
    this.setState({text: e.target.value})
  }

  //render function
  render() {
    let text = this.state.text;
    let cat = this.state.cat;
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{text} - {cat}</h2>
          </div>

          {/* that how parent value can be changed by child component */}
          <Test update={this.update.bind(this)} />
          <Test update={this.update.bind(this)} />
          <Test update={this.update.bind(this)} />
          <Test update={this.update.bind(this)} />
          <Test update={this.update.bind(this)} />


          <div className="todo-app">
            <form action="">
              <input type="text" onChange={this.update.bind(this)}/>
              <button className="input-button">I <Heart /> todos</button>
            </form>
            <div className="todo-list">
              <ul>
                {this.state.todos.map(todo => <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isChecked}/>{todo.name} - {this.state.cat}
                </li>)}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

//define props types
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

//define default props
App.defaultProps = {
  txt: "default props",
  cat: 5
};

//state less function just for development
const Test = (props) => {
  return <input type="text" onChange={props.update}/>
};

{/**/}
const Heart = () => <span>&hearts;</span>;

export default App;
