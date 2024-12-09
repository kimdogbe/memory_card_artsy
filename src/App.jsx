import { useState } from 'react'
import './App.css'
import GameSection from './components/GameSection'
import Nav from './components/Nav.jsx'


function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (gameStarted) {
    return <>
      <Nav currentScore={currentScore} highScore={highScore} />
      <GameSection 
        difficulty={difficulty} 
        currentScore={currentScore} 
        highScore={highScore}
        incrementScore={() => setCurrentScore(currentScore + 1)}
        setHighScore={(score) => setHighScore(score)}
        resetScore={() => setCurrentScore(0)} />
    </>
  }
  else {
    return (
      <>
        <Nav currentScore={currentScore} highScore={highScore} />
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
      </>
    )
  }
}

export default App
