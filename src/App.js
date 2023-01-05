import logo from './logo.svg'
import './App.scss'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  const handleConvert = () => {
    const arr = input.split('')
    const newArr = arr.map((c, i) => {
      if (i % 2 !== 0) {
        return c.toUpperCase()
      } else {
        return c.toLowerCase()
      }
    })
    return newArr.join('')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Input:</h2>
        <textarea value={input} onChange={e => setInput(e.target.value)} />
        <h2>Output:</h2>
        <textarea value={handleConvert()} />
        <img src="https://imgflip.com/s/meme/Mocking-Spongebob.jpg" alt="" />
      </header>
    </div>
  )
}

export default App
