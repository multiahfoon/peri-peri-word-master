import React from 'react'

function Start(props) {
  const startGame = props.startGame
  const instructions = 'How to play: You will be given a word and you have to '
  return (
    <div className='start'>
      <p>{instructions}</p>
      <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default Start
