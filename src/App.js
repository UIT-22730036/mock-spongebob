import logo from './logo.svg'
import './App.scss'
import { useState } from 'react'
import { teencodeConvertHandler } from './utils/utils'

const OPTIONS = [
  {
    label: 'Teen Code',
    value: 'teencode',
  },
  {
    label: 'Spongebob',
    value: 'spongebob',
  },
]

function App() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState('teencode')

  const handleConvert = () => {
    if (mode === 'spongebob') {
      const arr = input.split('')
      const newArr = arr.map((c, i) => {
        if (i % 2 !== 0) {
          return c.toUpperCase()
        } else {
          return c.toLowerCase()
        }
      })
      return newArr.join('')
    } else if (mode === 'teencode') {
      const arr = input.split(' ')
      const newArr = arr.map(letter => teencodeConvertHandler(letter))
      return newArr.join(' ')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <select onChange={e => setMode(e.target.value)}>
          {OPTIONS.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
