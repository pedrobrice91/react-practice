import SearchTodos from "./componets/SearchTodos";
import TodosList from "./componets/TodosList";
import TodoCount from "./componets/TodoCount";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";
import React from "react";

function App() {
  const defaultTodos = [
    { text: "limpiar la casa", completed: false },
    { text: "ordenar el cuarto", completed: false },
    { text: "pintar el cuarto", completed: false },
    { text: "limpiar los zapatos", completed: true },
    { text: "comprar zapatos", completed: true },
  ];
  const [value, setValue] = React.useState(" ");
  const [coutItem, setCounItem] = React.useState(defaultTodos);

  const pendinItem = coutItem.filter((elem) => {
    return elem.completed === false;
  });
  const completeItem = coutItem.filter((elem) => {
    return elem.completed === true;
  });

  return (
    <div className="App">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <TodoCount />
        <SearchTodos value={value} setValue={setValue} />
        <TodosList>
          {defaultTodos.map((elem, ind) => {
            return (
              <TodoItem
                key={ind}
                texto={elem.text}
                completado={elem.completed}
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
