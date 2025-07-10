const TodoItem = (props) => {
  return (
    <div className="todos-list">
      <ul className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <li className="group">
          <div className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
            <button className="mr-3 w-5 h-5 rounded border-2 border-gray-300 hover:border-green-400 flex items-center justify-center transition-colors">
            </button>
            <span className="flex-1 text-gray-800">
              {props.texto}
            </span>
            <button className="ml-3 p-1 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
              {/* <Trash2 size={16} /> */}
            </button>
          </div>
        </li>
        {/* <li className="px-4 py-8 text-center text-gray-500">
          No hay tareas pendientes
        </li> */}
      </ul>
    </div>
  );
};
export default TodoItem;


