import React from 'react'

export default function Game () {
  return (
    <form>
      <h1>{/* RANDOM WORD */}WORD</h1>
      <label htmlFor='userGuess' >Enter word here:</label>
      <input type='text' id="userGuess" name="userGuess"></input>
      <button>Submit</button>
    </form>

  )
}

/* create function that runs list of words from array to be passed into API function and provide us with word synonym object. have user input compare ther word against
word in synonym field of word object, if correct load correct +1 to counter - if incorrect load incorrect and no counter.
form field to be within return of current function */
