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
        <h1>Do you want to play disney game?</h1>
        <p>Aim of the Game:</p>
        <p>Select a character you have NOT selected before to add a point</p>
        <p>You get a point for every new character you select</p>
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
        <p>
          Photo by <a href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick Mills</a> on <a href="https://unsplash.com/photos/walt-disney-and-mickey-mouse-statue-during-daytime-l2T9cWjH9cY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
      </>
    )
  }
}

export default App
