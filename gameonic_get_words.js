'use strict'

// echo '{}' > package.json

// cost redis = new Redis()

// redis.key = value


// Gameonic



//  npm i --save asyncawait axios bitcore-mnemonic

const async = require('asyncawait/async')
const await = require('asyncawait/await')

// const fetch    = require('node-fetch')
const axios    = require('axios')
const Mnemonic = require('bitcore-mnemonic')
const c        = console

//
//
//
//
//

// Select a language:

// const words = Mnemonic.Words.ENGLISH
// const words = Mnemonic.Words.CHINESE
// const words = Mnemonic.Words.FRENCH
// const words = Mnemonic.Words.ITALIAN

   const words = Mnemonic.Words.JAPANESE

// const words = Mnemonic.Words.SPANISH


// ---

const translateApiEndpoint = (word) => {
  return `http://jisho.org/api/v1/search/words?keyword=${word}`
}

// ---

const translations = []


//  ------------

// async (
//   //
//   let url = translateApiEndpoint("")
//   c.log(url)
//   let resp = await axios.get(url)
// )

//  ------------

// main class
// const gameonic = async(() => {
const main = async(() => {

  // words.forEach((word) => {
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    c.log(word)
    let wordEscaped = encodeURIComponent(word)

    let url = translateApiEndpoint(wordEscaped)
    c.log(url)
    // url = "http://jisho.org/api/v1/search/words?keyword=%E3%81%82%E3%81%84%E3%81%93%E3%81%8F%E3%81%97"

    let resp = await( axios.get(url) )
    resp = resp.data

    if (!resp.data[0]) throw `ERR - Response: ${JSON.stringify(resp)}`

    let translation = resp.data[0].senses[0].english_definitions[0]

    // let translation = await translateFromJap(word)
    c.log(translation)

    translations.push({
      word:         word,
      translation:  translation,
      index:        i,
    })

    // break
    //
    // return translations
  }

  return translations

}) // async function ends


// ---

main().then((translations) => {
  c.log(translations)
}).catch((err) => {
  c.error(`Error: ${err}`)
  c.log("-------------------------")
  c.log("TRANSLATIONS UNTIL HERE")
  c.log("-------------------------")
  c.log(translations)
  c.log("-------------------------")
})


// ---
