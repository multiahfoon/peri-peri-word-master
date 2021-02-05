import React, { useState } from 'react'
import Start from './Start'
import Game from './Game'

function App () {
  const [showInstructions, setShowInstructions] = useState(true)

  function startGame () {
    setShowInstructions(false)
  }

  return (
    <div className='game-container'>
      <div className='header'>
        <h2 className='teamName'>Peri Peri Games</h2>

        <h1 className='gameName'>Word Master</h1>
      </div>
      {showInstructions && <Start startGame={startGame} />}
      {!showInstructions && <Game />}
    </div>
  )
}

export default App
