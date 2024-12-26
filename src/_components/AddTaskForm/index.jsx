import { useState } from 'react';
import Box from '../Box';
import Button from '../Button';

export default function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <Box>
      <p className="font-bold text-lg md:text-3xl text-gray-900 mb-5 md:mb-8">あなたの今日のタスクは？</p>
      <label>
          <span className="text-md md:text-lg text-gray-900">タスクを追加する<span className="text-gray-500 ml-4">（例）原稿を書く</span></span>
          <input
            type="text"
            aria-labelledby="title"
            className="w-full mt-5 py-4 px-5 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-md md:text-lg"
            placeholder="今日のタスク"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
      </label>
      <Button title="タスクを追加する" className="mt-5 md:mt-8" onClick={handleClick} />
      <fieldset>
        <div className="mt-4 md:mt-6">
          {todos.map((todo, index) => (
            <label className="block mt-3 text-md md:text-lg text-gray-900" key={index}>
              <input name="task" type="checkbox" className="mr-3" />
              {todo}
            </label>
          ))}
        </div>
    </fieldset>
    </Box>
  );
}
