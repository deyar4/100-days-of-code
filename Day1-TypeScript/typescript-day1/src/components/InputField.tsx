import React, { useRef } from 'react'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input'
    onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
    }}
    >
        <input type="text"
               ref={inputRef} 
               value={todo} 
               onChange={
          (e)=>setTodo(e.target.value)} 
               placeholder='Write a Task here' 
               className='inputBox'/>
        <button className='inputSubmit' type='submit'>Add</button>
    </form>
  )
}

export default InputField