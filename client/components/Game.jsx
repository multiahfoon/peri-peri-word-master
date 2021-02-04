import React, { useState } from 'react'

export default function Game () {
  const [userGuess, setGuess] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    console.log(userGuess)
    // setGuess(e.target.value)
  }

  function handleChange (e) {
    setGuess(e.target.value)
  }

  // if(userGuess === /* random word synonym */ ){
  //   //run correct function
  // } else {
  //   //run incorrect function
  // }

  // // userGuess === synonym ? correct : incorrect

  return (
    <form onSubmit={handleSubmit}>
      <h1>{/* RANDOM WORD */}WORD</h1>
      <label htmlFor='userGuess' >Enter word here:</label>
      <input onChange={handleChange} type='text' id="userGuess" name="userGuess" value={userGuess}></input>
      <button type='submit' value='submit' >Submit</button>
    </form>

  )
}

/* create function that runs list of words from array to be passed into API function and provide us with word synonym object. have user input compare ther word against
word in synonym field of word object, if correct load correct +1 to counter - if incorrect load incorrect and no counter.
form field to be within return of current function */
