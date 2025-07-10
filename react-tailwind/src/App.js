import SearchTodos from "./componets/SearchTodos";
import TodosList from "./componets/TodosList";
import TodoCount from "./componets/TodoCount";
import TodoItem from "./componets/TodoItem";
import Footer from "./componets/Footer";

function App() {
  const defaultTodos = [
    { text: "limpiar la casa", completed: false },
    { text: "ordenar el cuarto", completed: false },
    { text: "limpiar los zapatos", completed: false },
    { text: "limpiar los zapatos", completed: false }
  ]
  return (
    <div className="App">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <TodoCount />
        <SearchTodos />
        <TodosList>
          {defaultTodos.map((elem, ind) => {
            return (
              <TodoItem key={ind} texto={elem.text} />
            )
          })}
        </TodosList>
        <Footer one={12} two={25} />
      </div>
    </div>
  );
}

export default App;
