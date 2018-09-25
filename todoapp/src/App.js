import React, { Component } from 'react';
import './App.css';
import './css/materialize.min.css';
import Todo from './todo';
import AddTodo from './addTodo';
// import './js/materialize.min.js'

class App extends Component {
state = {
 todo : [
  {do: `To complete the house chores`, id: 1},
  {do: `Take the dog to walking`, id: 2},
  {do: `Text to my girl friend`, id: 3}
  ]
 }
 addTodo = (adddo) => {
  adddo.id = Math.random();
  let todo = [...this.state.todo, adddo];
   this.setState({
   todo
  })
 }

  handleDelete = (id) => {
   let todo = this.state.todo.filter(todo => {
   return todo.id !== id;//we todo.id is not equal to id that we get
    });                    // we dont remove it or else we remove that todo
    this.setState({
    todo
   });
  }
  render() {
    return (
     <div>
       <h3 id ="heading">Todo List ..... <i className="small material-icons">edit</i></h3>
       <Todo todo = {this.state.todo} handleDelete= {this.handleDelete} />
       <AddTodo  todo = {this.state.todo} addTodo = {this.addTodo}/>
     </div>
    );
  }
}

export default App;
