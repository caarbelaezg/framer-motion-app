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
      <div className="card">
        <Button count={incrementCount}>
          count is {count}
        </Button>
      </div>

    </>
  )
}

export default App
