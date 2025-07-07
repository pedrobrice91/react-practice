export default function TodoCount({one, two}) {
  return (
    <div className="todo-count">
      <h1 className="text-red-500">
        Total Todos: {one} de {two}
      </h1>
    </div>
  );
}
