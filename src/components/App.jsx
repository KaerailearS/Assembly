import React from 'react'
import {languages} from '../data/languages.js'

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")

  const languageElements = languages.map(language => (
    <span
      key={language.name}
      style={{backgroundColor: language.backgroundColor, color: language.color}}
      className='chips'>
        {language.name}
    </span>
  ))
  const letters = currentWord.split('')
  const letterElements = letters.map((letter, index) => {
    return (<span key={index} className='letter'>{letter.toUpperCase()}</span>)
  })
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const alphabetArray = alphabet.split('')
  const alphabetElements = alphabetArray.map((letter, index) => {
    return (<button key={index} className='keyboard-button'>{letter}</button>)
  })
  return (
    <>
      <header>
        <h1>
          Assembly: Endgame
        </h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe from Assembly!
        </p>
      </header>
      <main>
        <section className="status-section">
          <h2 className="win-text1">You win!</h2>
          <p className="win-text2">Well done! 🎉</p>
        </section>
        <section className='chips-section'>
          {languageElements}
        </section>
        <section className='word-section'>
          {letterElements}
        </section>
        <section className='keyboard-section'>
          {alphabetElements}
        </section>
      </main>
    </>
  )
}