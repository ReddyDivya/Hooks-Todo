import React, { useState } from 'react';
import './App.css';

//individual todo
const Todo = ({ index, todo, completeTodo, deleteTodo }) => {
  return (
    <>
      <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
		    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
      
    </>
  )
}

//add todo form
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');//value is a state, setValue is a function to update the state

  //add todo submit handler
  const onSubmitHndlr = e => {
    e.preventDefault();

    if (!value) return;//validation
    addTodo(value);
    setValue('');
  };//onSubmitHndlr

  return (
    <form onSubmit={onSubmitHndlr}>
      <input type='text' className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Todo..." required />
      <button>Add Task</button>
    </form>
  );
}//TodoForm

function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: true }
  ]);//todos is a state, setTodos fun to update the state

  //add todo
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };//addTodo

  //complete todo
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }//completeTodo

  //delete todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }//deletetodo

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />))
        }
		<br/><br/><br/>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;