import './TodoItem.css';
import Card from './UI/Card.js';

const TodoItem = (props, index) => {
  return (
    <Card>
      <div className="todoItem">
        <h3>{props.todo}</h3>
      </div>
    </Card>
  );
};
export default TodoItem;
