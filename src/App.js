import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import  './Todo.css';

class App extends Component {

  state = {
    todos :[
      {id:1, content: 'ኣይተሳእኩኑ ውዒለ😴😴😴😴'},
      {id:2, content:'ሓንቲ መጽሓፍ ከንብብ መደብ ኣሎኒ'},
      {id:3, content:'ምሽት ኣብ ቲክቶክ የራክበና 😅😅😅  '}
    
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [ ...this.state.todos,todo];
    this.setState({
      todos
    })

  }

  render(){
  return (
    <div className="todo-app container">
     <h2 lassName="center red-text">መዓልታዊ መደብና</h2>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    <AddTodo addTodo={this.addTodo} />
    </div>
  );
}
}

export default App;
