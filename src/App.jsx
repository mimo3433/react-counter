import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
        plus
        </button>
        <div>count is {count}</div>
         <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
        minus
        </button>
      </>
  )
}

export default App
