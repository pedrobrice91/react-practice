import SearchTodos from "./componets/SearchTodos";
import TodoTitle from "./componets/TodoTitle";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";
import { useState } from "react";

function App() {
  const initialTodoList = [
    { text: "limpiar la casa", completed: false },
    { text: "ORdenar el cuarto", completed: false },
    { text: "pintar el cuarto", completed: false },
    { text: "Lavar la ropa", completed: false },
    { text: "reparar Lavamano", completed: false },
    { text: "limpiar los zapatos", completed: true },
    { text: "comprar zapatos", completed: true },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);
  const [newTodoText, setNewTodoText] = useState("");

  const handleSearchSubmit = () => {
    console.log("Búsqueda enviada");
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(event.target.value);
  };

  // Contador total de todos
  const totalTodosCount = todoList.length;

  // Contador de todos
  const completedTodosCount = todoList.filter((todo) => {
    return todo.completed === true;
  }).length;

  const pendinTodosCount = todoList.filter((todo) => {
    return todo.completed === false;
  }).length;

  // Lista filtrada por búsqueda
  const filteredTodosBySearch = todoList.filter((todo) => {
    return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <TodoTitle />
        <SearchTodos
          onSearchSubmit={handleSearchSubmit}
          onSearchChange={handleSearchInputChange}
          searchQuery={searchQuery}
        />
        {filteredTodosBySearch.map((todoList, index) => (
          <TodoItem
            key={index}
            todoList={todoList}
            /*  onToggleComplete={/* función para manejar completar }
            onDelete={} */
          />
        ))}
        <Footer
          todoList={todoList}
          totalCount={totalTodosCount}
          completedCount={completedTodosCount}
          pendinTodosCount={pendinTodosCount}
        />
      </div>
    </div>
  );
}

export default App;
