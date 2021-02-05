import React, { useEffect, useState } from 'react'
import { getSynos } from '../api'

export default function Game () {
  const correctStyle = {
    display: 'none'
  }

  const incorrectStyle = {
    display: 'none'
  }

  const [userGuess, setGuess] = useState('')
  const [correct, setCorrect] = useState(correctStyle)
  const [incorrect, setIncorrect] = useState(incorrectStyle)
  const [randomWord, setRandomWord] = useState(null)

  useEffect(() => {
    getSynos()
      .then(res => {
        setRandomWord(res)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const compare = randomWord.synonyms.filter(synon => {
      if (userGuess === synon) {
        return synon
      }
    })

    if (userGuess === compare[0]) {
      console.log('correct')
      setIncorrect({
        display: 'none'
      })
      setCorrect({
        display: 'block'
      })
    } else {
      console.log('incorrect')
      setCorrect({
        display: 'none'
      })
      setIncorrect({
        display: 'block'
      })
    }
  }

  function handleChange (e) {
    setGuess(e.target.value)
  }

  console.log(randomWord)

  return (
    <form onSubmit={handleSubmit}>
      <h1>{randomWord ? randomWord.word : null}</h1>
      <label htmlFor='userGuess' >Enter word here:</label>
      <input onChange={handleChange} type='text' id="userGuess" name="userGuess" value={userGuess}></input>
      <button type='submit' value='submit' >Submit</button>
      <h3 style={correct}>CORRECT!</h3>
      <h3 style={incorrect}>TRY AGAIN</h3>
    </form>

  )
}

/* create function that runs list of words from array to be passed into API function and provide us with word synonym object. have user input compare ther word against
word in synonym field of word object, if correct load correct +1 to counter - if incorrect load incorrect and no counter.
form field to be within return of current function */
