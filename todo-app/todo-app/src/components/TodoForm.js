import React, {useState} from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const inputHandler = (event) => {
    setEnteredTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = enteredTodo;

    props.onSubmitTodo(newTodo);
    setEnteredTodo('');
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input type="text" value={enteredTodo} onChange={inputHandler} />
        <button class="add">Add</button>
      </form>
    </div>
  );
};
export default TodoForm;
