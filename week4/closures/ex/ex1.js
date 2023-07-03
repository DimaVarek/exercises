// Create a StringFormatter module. It should have two functions:
// capitalizeFirst - receives a string and returns the string with the first letter uppercased, 
// and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash


const StringFormatter = function () {
    return {
        capitalizeFirst: str => str[0].toUpperCase() + str.slice(1,str.length).toLowerCase(),
        toSkewerCase: str => str.replace(/ /i, '-')
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box