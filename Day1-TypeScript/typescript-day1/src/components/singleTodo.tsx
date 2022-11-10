import { Todo } from "../model";
import { AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import TodoList from "./TodoList";
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const singleTodo = ({todo, todos, setTodos}: Props) => {
    
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone}: todo))

    };


  return (
    <form className="todosSingle p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {
            todo.isDone ? (
<s className="todosSingleText mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{todo.todo}</s>
            ):(
                <span className="todosSingleText mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{todo.todo}</span>
            )
                
            
        }
        
       

        <div className="flex items-end">
            <span className="mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <AiFillEdit size={30} />
            </span>
            <span className="mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <AiFillDelete size={30} />
            </span>
            <span className="mb-2 w-12 h-12 text-gray-500 dark:text-gray-400">
                <MdDone size={30} onClick={() => handleDone(todo.id)} />
            </span>
        </div>
    </form>
  )
}

export default singleTodo