import SearchTodos from "./componets/SearchTodos";
import TodoTitle from "./componets/TodoTitle";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";
import { useState } from "react";

function App() {
  const defaultTodos = [
    { text: "limpiar la casa", completed: false },
    { text: "ORdenar el cuarto", completed: false },
    { text: "pintar el cuarto", completed: false },
    { text: "Lavar la ropa", completed: false },
    { text: "reparar Lavamano", completed: false },
    { text: "limpiar los zapatos", completed: true },
    { text: "comprar zapatos", completed: true },
  ];
  const [SearchValue, setSearchValue] = useState("");
  const [coutItem, setCounItem] = useState(defaultTodos);

  return (
    <div className="App">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <TodoTitle />
        <SearchTodos />
        {coutItem.map((todoList, id) => (
          <TodoItem key={id} todoList={todoList} />
        ))}
        <Footer coutItem={coutItem} />
      </div>
    </div>
  );
}

export default App;
