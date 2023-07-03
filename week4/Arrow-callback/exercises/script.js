// Exercise 1 - Callbacks
// Write a function pushPull that takes one argument - 
// a function - and invokes that function:
// const push = function () {
//     console.log("pushing it!")
//   }

//   const pull = function () {
//     console.log("pulling it!")
//   }
//   const pushPull = function (callback) {
//     callback()
//   } 

//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

// Exercise 2 - Callbacks
// You can get the current date/time in Javascript by writing: const time = new Date().
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.
// Note that returnTime receives a parameter! So when we call it from getTime, make sure to pass the argument.
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
// const getTime = function (callback) {
//     const time = new Date().toTimeString()
//     callback(time)
// }
// getTime(returnTime)

// Exercise 3 - Callbacks
// Given the following code, what error do you get? Write the missing part to make the code work:

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
// };
// const logData = function (data) {
//     console.log(data)
// }

// displayData(alert, logData, "I like to party")

// Exercise 4 - Arrow Functions
// Create an arrow function that receives three parameters and returns their sum - it should be one line.
// const sumOfThree = (num1, num2, num3) => num1 + num2 + num3
// console.log(sumOfThree(1, 2, 3))

// Exercise 5 - Arrow Functions
// Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:
// const capitalize = (str) => str[0].toUpperCase() + str.slice(1, str.lehgth).toLowerCase()

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia
// console.log(capitalize("feliSHIA"))

// Exercise 6 - Arrow functions
// Given the following:
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
// }
// const commentOnWeather = temp => "It's " + determineWeather(temp)

// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"
// console.log(commentOnWeather(30))
// console.log(commentOnWeather(22))

// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    soundFunc(sound)
    lightFunc()
    
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

explode(shineLight, makeSound, "BOOM")