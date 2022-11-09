import React from 'react'
import { Todo } from '../model'
import SingleTodo from './singleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,setTodos}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
        {
            todos.map((todo) => (
                <SingleTodo 
                todo={todo} 
                key={todo.id} 
                todos={todos}
                setTodos={setTodos}
                />
            ))
        }
    </div>
  )
}

export default TodoList