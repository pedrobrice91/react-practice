const TodosList = (props) => {
  return (
    <div className="todos-list">
      <ul>{props.children}</ul>
    </div>
  );
};
export default TodosList;
