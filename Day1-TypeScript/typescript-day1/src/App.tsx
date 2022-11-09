import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


const App = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  return (
    <div className="App bg-gradient-to-r from-sky-400 to-blue-500 h-screen">
<span className='flex justify-center text-5xl antialiased pt-6 text-white container mx-auto'>100 Days of Tasks</span>
<InputField todo={todo} handleAdd={handleAdd} setTodo={setTodo}/>
<TodoList todos={todos} setTodos={setTodos}/>   
    </div>
  );
}

export default App;
