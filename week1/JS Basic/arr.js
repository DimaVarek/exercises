let numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1, 2);
numbers[3] = 1
numbers.splice(numbers.length - 4, 4)
numbers.splice(0, 0, 0)
let a = 20
let k = 'hi!'
numbers[10] = 0
console.log(numbers)