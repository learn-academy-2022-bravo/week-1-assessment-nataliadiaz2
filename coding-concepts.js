// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain:The output is 5. When using the .push method the added element "indigo" was mutated to be added to the end of the array, and the output was the amount of elemnents in the array now.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The method .length identified all elements in the string, the letters, spaces, and numbers, then outputted the total in a number of the elements.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: undefined
// b) Verify and explain: The output is actually "o". I was assuming the 4 would output as undefined because there aren't four elements. I was confusing the string to an array. The 4 in the console is calling on the symbol in the 4th index of the string.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: In the invocation the index 1 was being called in the array. Going by the index and not the element number, the output is "Ruby". "Javascript" index is 0, "Ruby" index is 1, "Python" index is 2, "C++"" index is 3.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: The built in method of .toUpperCase applies to strings the way it is currently written. The output came out as content inside the console.log is not a function. For the built in method to apply to the variable, inside the parenthesis should be the strings inside the arrays to properly upper case all content.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: I expected the output as 3 to identify the amount of strings inside the array. The actual output was number. As I understand the typeof was invoking to identify what the dataTypes.length output was. The dataTypes.length alone would be 3, the amount of strings inside the array, since the output would be 3, the typeof understands that and the total console.log outputs number.
