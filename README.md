/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 * 
 *  <main> that includes the entire project, one <div> for the <h1> and <p>, one <div> for the remaining programming languages(<p>?), one <div> for the answer line, and one <div> for the letter buttons 

 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 * 
 *  Using similar logic to the Tenzies project, gameWon does not need to be saved in state, but simply as a variable. The answer and lives will need to be saved to state, to update the visuals of the answer line and remaining programming languages

 * - How will the user interact with the app? What
 *   events do I need to handle?
 * 
 *  Pressing buttons. Each letter needs a functioning button, as well as a "New Game" button once the game ends.
 */

 Challenges:

 /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge 1: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

/**
 * Challenge 2: Build a status section below the header.
 * For now, you can just hard-code in the styles for
 * a winning game, and we'll make it more dynamic
 * later.
 */
 
/**
 * Challenge 3: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */
 
/**
 * Challenge 4: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */
 
/**
 * Challenge 5: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */
 
/**
 * Think: what would be the best way to store the user's
 * guessed letters?
 * Add each guessed letter to a state array, and compare existing array items to the letters in the answer array
 */
 
/**
 * Challenge 6: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Don't worry about whether it was a right or wrong 
 * guess yet.
 */
 
/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge 7: Update the keyboard when a letter is right
 * or wrong.
 * 
 * Bonus: use the `clsx` package to easily add conditional 
 * classNames to the keys of the keyboard. Check the docs 
 * to learn how to use it 📖
 */
 
/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge 8: Only display the correctly-guessed letters
 * in the word
 */