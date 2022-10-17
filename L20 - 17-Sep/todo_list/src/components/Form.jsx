import React from 'react'


const Form = ({input, setInput, todos, setTodosArrays}) => {
    const inputChange = (e) => {
        
    }
  return (
    <>
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder='Enter a Todo...' 
                    className='task-input'
                    value={ input }
                    onChange={ inputChange() }
                />
                <button onClick={(e) => { e.preventDefault() }} className='add-button' type='submit'>Add</button>
            </form>
        </div>
    </>     
  )
}


<>

</>export default Form