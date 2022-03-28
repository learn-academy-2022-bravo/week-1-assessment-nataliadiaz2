// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected Output: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected Output: "cherry"



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

//Create a function having the variables above in mind.
//create a new const to be able to input options
//Create a conditional statement
//Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//Create a console.log to run the conditional statement through the terminal

 const boilingPoint = (temp) => {
   if (temp <= temp1) {
     return "42 is below boiling point"
   }else if (temp >= temp2) {
     return "350 is above boiling point"
   }else if (temp === temp3) {
     return "212 is at boiling point"
   }
 }

console.log(boilingPoint(42))
console.log(boilingPoint(350))
console.log(boilingPoint(212))

//Actual output: console.log(boilingPoint(41))
//Actual output: console.log(boilingPoint(212))
//Actual output: console.log(boilingPoint(360))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//Create a function that will combine the two arrays above
//Input the two arrays in the return part of the function and use + to combine the arrays
//Use the console.log with the method .length to call on the length of the combined arrays
//Expected Output: 10

const combinedArray = (string1, string2) => {
  return (string1.length + string2.length)
}
console.log(combinedArray(myNumbers1, myNumbers2))

//Actual output: 10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

const currentCohort = "Bravo 2022"

//Create a code with the variable above in mind
//Use a split built in method to separate the string into two arrays
//Use a reverse built in method to reverse the now two arrays
//Use the join built in method to now conbine the reversed two arrays back into a strings
//Expected output: '2202 ovarB'

console.log(currentCohort.split('').reverse().join(""))

//Actual output: '2202 ovarB'

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//Create a for loop to address each element in the array
//Add the .lenght built in method in the for loop beginning statement to identify all elements in the array
//Create a condtional to identify if the number addressed in the array is odd
//Create an output for the index if the number is odd
//Creae an else condition to identify if the number addressed by default is even
//Create an output for the index if the number is even
//Expected output: "odd" "even" "odd" "even" "odd" "even"
  for (let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 !== 0){
    console.log("odd")
  }else {
    console.log("even")
  }
}

//Actual output: "odd" "even" "odd" "even" "odd" "even"

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//Create a function having both sets above in mind, create a new const for each function
//Create a condition statement determining which number is larger with the >
//Return the larger number - the smaller number
//Create another function having both sets above in mind
//Create another condition statement determining which number is larger with the >
//Return the larger number - the smaller number
//Expected output from each set: 42, 3

const equal = (string1, string2) => {
  if (number1 > number2){
    return number1 - number2
  }else if (number2 > number1){
    return number2 - number1
  }
}

const equal2 = (string1, string2) => {
   if (number3 > number4){
    return number3 - number4
  }else if (number4 > number3){
    return number4 - number3
  }
}

console.log(equal(number1, number2))
console.log(equal2(number3, number4))

//Actual output from each set: 42, 3
