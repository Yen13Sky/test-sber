import { useState } from 'react'
import Timeline from './components/Timeline'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <section className="timeline container">
        <Timeline />
      </section>
    </main>
  )
}

export default App
