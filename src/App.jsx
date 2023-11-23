import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1);
  }


  const handleSubstract = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }


  return (
    <>
      <div className='container'>
        <h1>Counter: <span>{count}</span></h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-</button>
      </div>
    </>
  )
}

export default App
