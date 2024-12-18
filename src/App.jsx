import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <fieldset className="border border-gray-300 rounded-md p-6 bg-gray-50">
        <h1 id="title" className="text-2xl font-bold mb-6 text-gray-800">
          あなたの今日のタスクは？
        </h1>
        <label className="text-left">
          <div className="text-left">タスクを追加する （例）原稿を書く</div>
          <input
            type="text"
            aria-labelledby="title"
            className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="今日のタスク"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleClick}
        >
          タスクを追加する
        </button>
        <div className="mt-6">
          {todos.map((todo, index) => (
            <label className="block mb-2" key={index}>
              <input type="checkbox" className="mr-2" />
              {todo}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default App;
