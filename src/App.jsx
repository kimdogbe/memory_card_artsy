import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [difficulty, setDifficulty] = useState('easy')

  return (
    <>
      <h1>Do you want to play disney game?</h1>
      <p>Aim of the Game:</p>
      <p>Select a character you have NOT selected before to add a point</p>
      <p>You get a point for every new character you select</p>
      <p>Simples...</p>

      <div className="card">
        <p>Select difficulty</p>
        <button onClick={() => setDifficulty((e) => e.target.value)}>
          Easy
        </button>
        <button onClick={() => setDifficulty((e) => e.target.value)}>
          Medium
        </button>
        <button onClick={() => setDifficulty((e) => e.target.value)}>
          Hard
        </button>
      </div>
      <p>
        Photo by <a href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick Mills</a> on <a href="https://unsplash.com/photos/walt-disney-and-mickey-mouse-statue-during-daytime-l2T9cWjH9cY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </p>
    </>
  )
}

export default App
