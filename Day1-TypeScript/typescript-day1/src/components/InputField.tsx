import React from 'react'

const InputField = () => {
  return (
    <form className='input'>
        <input type="input" placeholder='Write a Task here' className='inputBox'/>
        <button className='inputSubmit' type='submit'>Add</button>
    </form>
  )
}

export default InputField