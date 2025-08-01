import { IoMdAddCircle } from "react-icons/io";
import React from "react";

export default function SearchTodos({ SearchValue, setSearchValue }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Agregar nueva tarea..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={SearchValue}
      />
      <button
        onClick={() => console.log(SearchValue)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <IoMdAddCircle size={16} />
      </button>
    </div>
  );
}
