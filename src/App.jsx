import { useState } from 'react'
import './App.css'
import GameSection from './components/GameSection'

function App() {
  const [difficulty, setDifficulty] = useState('easy')
  const [gameStarted, setGameStarted] = useState(false)

  if (gameStarted) {
    return <GameSection difficulty={difficulty}/>
  }
  else {
    return (
      <>
        <h1>Got an eye for good art?</h1>
        <h2>Aim of the Game:</h2>
        <p>Select an art piece you have NOT selected before to add a point</p>
        <p>You get a point for every new art piece you select</p>
        <p>Simples...</p>
  
        <div className="card">
          <p>Selected difficulty: {difficulty}</p>
          <button onClick={(e) => setDifficulty(e.target.innerHTML)}>
            Easy
          </button>
          <button onClick={(e) => setDifficulty(e.target.innerHTML)}>
            Medium
          </button>
          <button onClick={(e) => setDifficulty(e.target.innerHTML)}>
            Hard
          </button>
        </div>
  
        <button onClick={() => setGameStarted(true)}>Start Game</button>

        <div>
          Photo by <a href="https://unsplash.com/@aaina?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aaina Sharma</a> on <a href="https://unsplash.com/photos/man-sitting-near-museum-painting-nqj3ncOPS0g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        
      </>
    )
  }
}

export default App
