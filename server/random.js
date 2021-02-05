module.exports = {
  getRandomWord,
}

function getRandomWord(words) {
  console.log('running randomwords in random.js')
  return words[Math.floor(Math.random() * words.length)]
}
