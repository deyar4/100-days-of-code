/* eslint-disable react-hooks/rules-of-hooks */
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { useEffect, useRef, useState } from "react";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const singleTodo = ({todo, todos, setTodos}: Props) => {

    const [edit,setEdit] = useState<boolean>(false);

    const [editTodo,setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone}: todo))

    };

    const handleDelete = (id: number ) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);


  return (
    <form className="todosSingle p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    onSubmit={(e) => handleEdit(e, todo.id)}
    >
       {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) :             todo.isDone ? (
            <s className="todosSingleText mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{todo.todo}</s>
                        ):(
                            <span className="todosSingleText mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{todo.todo}</span>
                        )}

        <div className="mt-4 flex items-end">
            <span className="cursor-pointer mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <AiFillEdit size={30} onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}/>
            </span>
            <span className="cursor-pointer mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <AiFillDelete size={30} onClick={() => handleDelete(todo.id)} />
            </span>
            <span className="cursor-pointer mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <MdDone size={30} onClick={() => handleDone(todo.id)} />
            </span>
        </div>
    </form>
  )
}

export default singleTodo