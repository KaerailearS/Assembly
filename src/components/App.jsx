import React from 'react'
import {clsx} from 'clsx'
import {languages} from '../data/languages.js'

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])
  const [letterStatus, setLetterStatus] = React.useState({})

  const addGuessedLetter = (letter) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(prev => [...prev, letter])

    const isCorrect = currentWord.includes(letter)
    setLetterStatus(prev => {
      if (prev[letter]) {
        return prev
      }
      return {
        ...prev, 
        [letter]: isCorrect ? 'correct' : 'incorrect'
      }
    })
  
  }

  const languageElements = languages.map(language => (
    <span
      key={language.name}
      style={{backgroundColor: language.backgroundColor, color: language.color}}
      className='chips'>
        {language.name}
    </span>
  ))
  const letterElements = currentWord.split('').map((letter, index) => {
    return (
      <span
        key={index}
        className='letter'>
          {letter.toUpperCase()}
        </span>
      )
  })
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const alphabetElements = alphabet.split('').map(letter => {
    return (
      <button
        key={letter}
        className={clsx("button", {
          "button-correct": letterStatus[letter] === "correct",
          "button-incorrect": letterStatus[letter] === "incorrect",
          "button-default": !letterStatus[letter]
        })}
        onClick={() =>addGuessedLetter(letter)}>
          {letter.toUpperCase()}
      </button>
    )
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
        <button className="new-game">New Game</button>
      </main>
    </>
  )
}