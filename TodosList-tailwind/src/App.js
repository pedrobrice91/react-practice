import SearchTodos from "./componets/SearchTodos";
import TodoTitle from "./componets/TodoTitle";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";
import { useState } from "react";

function App() {
  const initialTodoList = [
    { text: "limpiar la casa", completed: false },
    { text: "Ordenar el cuarto", completed: false },
    { text: "pintar el cuarto", completed: false },
    { text: "Lavar la ropa", completed: false },
    { text: "reparar Lavamano", completed: false },
    { text: "limpiar los zapatos", completed: true },
    { text: "comprar zapatos", completed: true },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleSearchSubmit = () => {
    if (searchQuery === ''){
      console.log('El campo esta vacio')
      return
    }
    
    const value = {
      text: searchQuery,
      completed: false,
    };
    
    const addvalu = todoList.concat(value);
    setTodoList(addvalu);
    setSearchQuery('')
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
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

  /// marcado de check en la lista
  const handleCheck = (list) => {
    const newTodo = [...todoList];
    const todoIndex = newTodo.findIndex((todo) => todo.text === list);
    newTodo[todoIndex].completed = true;
    setTodoList(newTodo);
  };

  /// Eliminar de la lista
  const handleDelete = (list) => {
    const newTodo1 = [...todoList]; //crea copia
    const todoIndex1 = newTodo1.filter((todo) => {
      return todo.text !== list.text;
    }); //busca
    setTodoList(todoIndex1); //actualiza
  };

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
            onClicklist={() => handleCheck(todoList.text)}
            onClickDelete={() => handleDelete(todoList)}
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
