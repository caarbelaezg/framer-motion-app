import { useState } from 'react'
import { Button } from './components/Button/Button'
import './App.css'
import { PresentationCard } from './components/PresentationCard/PresentationCard'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>
        <PresentationCard />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={incrementCount}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
