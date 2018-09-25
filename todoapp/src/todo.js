import React from 'react';

const Todo = ({todo, handleDelete}) => {

 const TodoList = todo.length ? (
   todo.map(todo => {
     return (
    <div className = "header" key = {todo.id}>
      <ul className="collection" >
        <li  onClick = {()=> {handleDelete(todo.id)}}className="collection-item" >{todo.do}</li>
      </ul>
    </div>
     )
    })
   ) : ( <h3 id= "noTodo">You have no Todos to do</h3> );
  return (
<div className = 'todoAssign'>
  {TodoList}
</div>
 )
}

export default Todo;
