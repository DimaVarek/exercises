// Exercise 1
// Write a function called isEven that accepts a number as a parameter and checks if the number is even or not. 
// Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo %

function isEven(num) {
    return num % 2 == 0
}
// console.log("Exercise 1")
// console.log(isEven(2))
// console.log(isEven(3))

// Exercise 2
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.

function getOddNums(numArr) {
    for (let num of numArr) {
        if (!isEven(num)) {
            console.log(num)
        }
    }
}
// console.log("Exercise 2")
// getOddNums([1, 2, 3, 4, 5, 6, 7, 8])

// Exercise 3
// Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on whether the number exists in the array.
// Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.
// checkExists([1, 2, 3], 2) - should return true
// checkExists([1, 2, 3], 5) - should return false

function checkExists(numArr, checkingNum) {
    for (let num of numArr) {
        if (num === checkingNum) {
            return true
        }
    }
    return false
}

// console.log("Exercise 3")
// console.log(checkExists([1, 2, 3], 2))
// console.log(checkExists([1, 2, 3], 5))

// Exercise 4
// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.

const calculator = {
    add: function add(num1, num2) { return num1 + num2 },
    subtract: function subtract(num1, num2) {return num1 - num2}
}

// console.log("Exercise 4")
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42


// Exercise 5 (Extra Practice)
// Complete the following code:
function increaseByNameLength(money, name) {
    return money * name.length
}

function makeRegal(name) {
    return "His Royal Highness, " + name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

// console.log("Exercise 5")
// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"