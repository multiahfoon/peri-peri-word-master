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

  console.log(randomWord)
  // if(userGuess === /* random word synonym */ ){
  //   //run correct function
  // } else {
  //   //run incorrect function
  // }

  // // userGuess === synonym ? correct : incorrect

  return (
    <div className='game'>
      <h3 className='randomWord'>{randomWord ? randomWord.word : null}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='userGuess' >Enter synonym here:</label>
        <br/>
        <input onChange={handleChange} type='text' id="userGuess" name="userGuess" value={userGuess}></input>
        <div className='submitContainer'>
          <button type='submit' value='submit' className='submitButton'>Submit</button>
        </div>
      </form>
    </div>
  )
}

/* create function that runs list of words from array to be passed into API function and provide us with word synonym object. have user input compare ther word against
word in synonym field of word object, if correct load correct +1 to counter - if incorrect load incorrect and no counter.
form field to be within return of current function */
