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
    <div className="App">
<span className='heading'>100 Days of Tasks</span>
<InputField todo={todo} handleAdd={handleAdd} setTodo={setTodo}/>
<span className="todoss">Todos:</span>
<TodoList todos={todos} setTodos={setTodos}/>   
    </div>
  );
}

export default App;
