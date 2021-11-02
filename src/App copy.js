import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: true }
  ]);//todos is a state, setTodos fun to update the state

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} />))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

//add todo
const addTodo = text => {
  const newTodos = [...todos, { text }]
  setTodos(newTodos)
}//addTodo

//individual todo
const Todo = ({ index, todo }) => {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

//add todo form
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');//value is a state, setValue is a function to update the state

  //add todo submit handler
  const onSubmitHndlr = e => {
    e.preventDefaul();

    if (!value) return;//validation
    addTodo(value);
    setValue('');
  }//onSubmitHndlr

  return (
    <form onSubmit={onSubmitHndlr}>
      <input type='text' className="input" value={value} onChange={() => setTodos(e.target.value)} />
      <button>Add Task</button>
    </form>
  )
}//TodoForm

export default App;