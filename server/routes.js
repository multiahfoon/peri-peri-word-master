// const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()
const randomWord = 'lovely'
const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${randomWord}/synonyms`
const apiKey = ''

// Put api/v1/ routes here
// so when this route is call do as followed
server.get('/', (req, res) => {
  console.log('route working')
  request.get(apiUrl)
    .query({ 'rapidapi-key': apiKey })
    .then(apiRes => {
      const result = apiRes.body
      console.log(apiRes.body)
      return res.json(result)
    })
    .catch(err => console.log(err))
})

module.exports = server
