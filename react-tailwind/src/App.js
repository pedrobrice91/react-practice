import React from "react";
import SearchTodos from "./componets/SearchTodos";
import TodosList from "./componets/TodosList";
import TodoCount from "./componets/TodoCount";
import TodoItem from "./componets/TodoItem";
import Button from "./componets/Button";

function App() {
  const defaultTodos = [
    { text: "limpiar la casa", completed: false },
    { text: "ordenar el cuarto", completed: false },
    { text: "limpiar los zapatos", completed: false },
  ]
  return (
    <div className="App">
      <TodoCount one={12} two={25} />
      <SearchTodos />
      <TodosList>
        {defaultTodos.map((todos, ind) => {
          return (
            <TodoItem key={ind} text={todos.text}/>
          )
        })}
      </TodosList>
      <Button />
    </div>
  );
}

export default App;
