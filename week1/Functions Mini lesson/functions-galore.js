people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr  
    return capitalizedStr.trimEnd()
}


const profession = function (str) {
    let capitalizedStr = ""
    for (let word of str.split(" ")) {
        capitalizedStr += capitalize(word)
        capitalizedStr += " "
    }
    return capitalizedStr.trimEnd()
}

// If the age is below 21, it should say “Underage” instead
// If the age is above 55 it should say “55+” instead
// The catchphrase should be wrapped in quotes with its first letter capitalized
const getAge = function(age) {
    if (age < 21) { return "an underage" }
    else if (age > 55) { return "a 55+"}
    else {return age + " years old"}
}

const placeMake = function(country, city) {
    return "from " + capitalize(country) + ", " + capitalize(city)
}

const catchphrasereturn = function(name, catchphrase) {
    return capitalize(name) + " loves to say \"" + capitalize(catchphrase) + "\"" 
}



const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += " is " + getAge(person.age) + " " //Yes - you can put a function call inside the tick quotes!
    summary += profession(person.profession) + " "
    summary += placeMake(person.country, person.city) + " "
    summary += catchphrasereturn(person.name, person.catchphrase)
    return summary
}

console.log(getSummary(people_info[1]))

// Guido is an underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!".
// Petra is 31 year old Jet Plane Mechanic from Bostork, Greenmark. Petra loves to say "That’s my engine, bub".
// Damian is a 55+ Nursery Assistant from Bekyo, Zimbia. Damian loves to say "With great responsibility comes great power".

// And say I want to write up a basic summary of each person, but:
// All proper nouns* should be capitalized
// The city and country should come together with a comma in between
// If the age is below 21, it should say “Underage” instead
// If the age is above 55 it should say “55+” instead
// The catchphrase should be wrapped in quotes with its first letter capitalized
