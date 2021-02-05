import React, { useEffect, useState } from 'react'
import { getSynos } from '../api'

export default function Game () {
  const [userGuess, setGuess] = useState('')

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
    setGuess(e.target.value)
  }

  function handleChange (e) {
    setGuess(e.target.value)
  }

  randomWord.synonyms.forEach(synon => {
    if (userGuess === synon) {

    } else {

    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <h1>{randomWord ? randomWord.word : null}</h1>
      <label htmlFor='userGuess' >Enter word here:</label>
      <input onChange={handleChange} type='text' id="userGuess" name="userGuess" value={userGuess}></input>
      <button type='submit' value='submit' >Submit</button>
    </form>

  )
}

/* create function that runs list of words from array to be passed into API function and provide us with word synonym object. have user input compare ther word against
word in synonym field of word object, if correct load correct +1 to counter - if incorrect load incorrect and no counter.
form field to be within return of current function */
