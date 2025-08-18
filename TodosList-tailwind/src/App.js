import SearchTodos from "./componets/SearchTodos";
import TodosList from "./componets/TodosList";
import TodoTitle from "./componets/TodoTitle";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";
import React from "react";
import Headers from "./componets/Headers";

function App() {
  const defaultTodos = [
    { text: "limpiar la casa", completed: false },
    { text: "ordenar el cuarto", completed: false },
    { text: "pintar el cuarto", completed: false },
    { text: "Lavar la ropa", completed: false },
    { text: "reparar Lavamano", completed: false },
    { text: "limpiar los zapatos", completed: true },
    { text: "comprar zapatos", completed: true },
  ];
  const [SearchValue, setSearchValue] = React.useState("");
  const [coutItem, setCounItem] = React.useState(defaultTodos);

  const pendinItem = coutItem.filter((elem) => {
    return elem.completed === false;
  });
  const completeItem = coutItem.filter((elem) => {
    return elem.completed === true;
  });

  const search = coutItem.filter((elem) => {
    return elem.text.toLowerCase().includes(SearchValue.toLowerCase());
  });

  const taskReady = (txt) => {
    const newTodos = [...coutItem];
    const todoIndex = newTodos.findIndex((elem) => {
      return elem.text === txt;
    });
    newTodos[todoIndex].completed = true;
    return setCounItem(newTodos);
  };

  const taskDelete = (txt) => {
    const newTodos = [...coutItem];
    const todoIndex = newTodos.findIndex((elem) => {
      return elem.text === txt;
    });
    newTodos.splice(todoIndex, 1);
    return setCounItem(newTodos);
  };

  return (
    <div className="App">
      <Headers />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <TodoTitle />
        <SearchTodos
          SearchValue={SearchValue}
          setSearchValue={setSearchValue}
        />
        <TodosList>
          {search.map((elem, ind) => {
            return (
              <TodoItem
                key={ind}
                texto={elem.text}
                completado={elem.completed}
                onComplete={() => taskReady(elem.text)}
                onDelete={() => taskDelete(elem.text)}
              />
            );
          })}
        </TodosList>
        <Footer one={completeItem.length} two={pendinItem.length} />
      </div>
    </div>
  );
}

export default App;
