import React, { useEffect, useState } from 'react'
import { getSynos } from '../api'

export default function Game () {
  const hide = {
    display: 'none'
  }

  const show = {
    display: 'block'
  }

  const [userGuess, setGuess] = useState('')
  const [correct, setCorrect] = useState(hide)
  const [incorrect, setIncorrect] = useState(hide)
  const [randomWord, setRandomWord] = useState(null)

  function getRandomWord () {
    console.log('running getrand')
    setGuess('')
    setIncorrect(hide)
    setCorrect(hide)
    return getSynos()
      .then((res) => {
        setRandomWord(res)
        return null
      })
      .catch((err) => {})
  }

  useEffect(getRandomWord, [])

  function handleSubmit (e) {
    e.preventDefault()

    const compare = randomWord.synonyms.filter((synon) => {
      if (userGuess === synon) {
        return synon
      }
    })

    if (userGuess === compare[0]) {
      console.log('correct')
      setIncorrect(hide)
      setCorrect(show)
    } else if (userGuess === '') {
      console.log('incorrect')
      setCorrect(hide)
      setIncorrect(hide)
    } else {
      setCorrect(hide)
      setIncorrect(show)
    }
  }

  function handleChange (e) {
    setGuess(e.target.value)
  }

  console.log(randomWord)

  return (

    <div className='game'>
      <h3 className='randomWord'>{randomWord ? randomWord.word : null}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='userGuess'>Enter word here:</label>
        <input
          onChange={handleChange}
          type='text'
          id='userGuess'
          name='userGuess'
          value={userGuess}></input>
        <div className='submitContainer'>
          <button className='submitButton' type='submit' value='submit'>
        Submit
          </button>
        </div>
        <button onClick={getRandomWord} style={correct}>
        CORRECT!
        </button>
        <button onClick={getRandomWord} style={incorrect}>
        TRY AGAIN
        </button>
      </form>
    </div>
  )
}
