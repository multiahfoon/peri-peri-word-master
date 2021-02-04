const express = require('express')
const request = require('superagent')
const server = express()

const random = require('./random')
const words = require('./words')
const randomWord = random.randomWord(words)

const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${randomWord}/synonyms`
require('dotenv').config()
const apiKey = process.env.key

// Put api/v1/ routes here
// so when this route is call do as followed
server.get('/', (req, res) => {
  console.log('route working')
  request.get(apiUrl)
    .query({ 'rapidapi-key': apiKey })
    .then(apiRes => {
      const result = apiRes.body
      console.log(apiRes.body)
      res.json(result)
      return null
    })
    .catch(err => console.log(err))
})

module.exports = server
