// spot check 1
// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }
// ]

// const orangeVegetables = vegetables.filter(veg => veg.color === 'orange')
// console.log(orangeVegetables)

// spot check 2
// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]
// const increaseSalary = p => p.goodPerformance ? p.salary += 300 : ""

// people.forEach(increaseSalary)
// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

// spot check 3
// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
// messagesFromDad = messagesFromDad.map(m => m.toLowerCase())
// console.log(messagesFromDad)

// Spot Check 4
// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

// const findCommentByID = (postId, commentID) => posts.find(p => p.id === postId).comments.find(c => c.id === commentID)
// console.log(findCommentByID(1, 0))

// Spot Check 5
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

console.log(movies.some(f => f.studio === 'Marvel') ? "Let's go watch some movies" : "Let's stay home") 
console.log(movies.every(f => f.year > 2020) ? "Futuristic stuff" : "Yawn") 