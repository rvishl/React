import React, {useState} from 'react'
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  const [input, setInput] = useState("");
  const [todosArray, setTodoArray] = useState([])
  return (
    <>
      <div className='app'>
        <div className = 'app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <Form
              input = { input }
              setInput = { setInput }
              todosArray = { todosArray }
              setTodoArray = { setTodoArray }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App