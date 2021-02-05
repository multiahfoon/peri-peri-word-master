import React from 'react'

function Start (props) {
  const startGame = props.startGame
  const instructions =
    'How to play: Guess a synonym of the random word and press submit '
  return (
    <div className='start'>
      <p className='instructions'>{instructions}</p>
      <div className='buttonContainer'>
        <button onClick={startGame} className='startButton'>Start Game</button>
      </div>
    </div>
  )
}

export default Start
