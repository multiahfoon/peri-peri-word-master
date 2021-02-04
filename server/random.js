module.exports = {
  randomWord
}

function randomWord (words) {
  return words[Math.floor(Math.random() * words.length)]
}
