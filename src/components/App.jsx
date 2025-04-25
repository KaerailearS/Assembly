import React from 'react'

export default function AssemblyEndgame() {
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
        <div className="status-section">
          <p className="win-text1">You win!</p>
          <p className="win-text2">Well done! 🎉</p>
        </div>
      </main>
    </>
  )
}