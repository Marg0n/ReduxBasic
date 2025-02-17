import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>counter with redux</h1>
        <Button>Increment</Button>
        <Button>{count}</Button>
        <Button>Decrement</Button>
      </div>
    </>
  )
}

export default App
