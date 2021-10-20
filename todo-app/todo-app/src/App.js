import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const DUMMY_TODOS = ['12', 'awda', '123123'];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const submitTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm onSubmitTodo={submitTodoHandler} />
      {todos.map((item) => (
        <TodoItem todo={item} />
      ))}
    </div>
  );
}
export default App;
