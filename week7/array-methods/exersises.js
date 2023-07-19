const usersPromise = $.get('https://jsonplaceholder.typicode.com/users')


// Ex1
// Here’s the first exercise:
// Map the data differently so you are left with an array of each user’s email and their company’s name. 
// Your resulting array should look like this:
const ex1Fn = function (data) {
    return data.map(user => {
        return {
            email: user.email,
            companyName: user.company.name
        }
    })
}
// usersPromise.then(data => {
//     console.log(ex1Fn(data))
// })

// Ex2
// Create an array with user objects that have a zip-code that starts with "5".
// You should be left with the objects whose IDs are 3, 4, and 7.
const ex2Fn = data => data.filter(user => user.address.zipcode[0] === '5')
// usersPromise.then(data => {
//     console.log(ex2Fn(data))
// })
// Ex3
const ex3Fn = data => data.filter(user => user.address.zipcode[0] === '5')
                          .map(user => user.id)
// usersPromise.then(data => {
//     console.log(ex3Fn(data))
// })

// Ex4
const ex4Fn = data => data.filter(user => user.name[0] === 'C')
                          .map(user => user.name)
// usersPromise.then(data => {
//     console.log(ex4Fn(data))
// })
// Ex5
const ex5Fn = data => data.every(user => user.address.city === "South Christy")
// usersPromise.then(data => {
//     console.log(ex5Fn(data))
// })
// const ex6Fn = data => data.find(user => user.address.suite === "Apt. 950")
//                           .company.name
// usersPromise.then(data => {
//     console.log(ex6Fn(data))
// })

// const userLog = user => console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
// usersPromise.then(data => {
//     data.forEach(userLog);
// })

const someThing = async function () {
    promises = await $.get('https://jsonplaceholder.typicode.com/users')
    return promises
}

const sss = someThing()
console.log(sss)