const TodoItem = (props) => {
    return (
      <div className="todos-list">
        <li className="list-disc list-inside">
          <span> v</span>
          <p>{props.text}</p>
          <span> X</span>
        </li>
      </div>
    );
  };
  export default TodoItem; 