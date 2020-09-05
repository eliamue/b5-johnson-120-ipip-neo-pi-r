const { knuthShuffle } = require('knuth-shuffle')
const languages = require('./data/languages.json')

module.exports.getItems = (lang = 'en', shuffle = false) => {
  let choices, questions
  try {
    questions = require(`./data/${lang}/questions.json`)
    choices = require(`./data/${lang}/choices`)
  } catch (error) {
    throw new Error('Inventory not found. Try another language input.')
  }

  const inventory = shuffle === true ? knuthShuffle(questions) : questions
  return inventory.map((question, i) => Object.assign(question, { num: ++i, choices: choices[question.keyed] }))
}

module.exports.getInfo = () => (
  {
    name: "Johnson's IPIP NEO-PI-R",
    id: 'johnson-120-ipip-neo-pi-r',
    shortId: 'b5-120',
    time: 10,
    questions: 120,
    note: 'Recommended',
    languages
  }
)

module.exports.getChoices = (lang = 'en') => {
  let choices
  try {
    choices = require(`./data/${lang}/choices`)
  } catch (error) {
    throw new Error('Choices not found. Try another language input.')
  }
  return choices
}
