import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <MyButton onClick={handleClick} count={count}/>
        <MyButton onClick={handleClick} count={count}/>
      </div>
    </>
  )
}


function MyButton({count, onClick}) {

  
  return (
    <button onClick={onClick}>{count}</button>
  )
}
export default App
