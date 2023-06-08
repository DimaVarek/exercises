let boughtTesla = false
const yearOfTeslaPurchase = 2015
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla) {
    if (isUSCitizen) {
        if (currentYear - yearOfTeslaPurchase >= 4) {
            console.log("Would you like an upgrade?")
        } else {
            console.log("Are you satisfied with the car?")
        }
    } else {
        console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying one?")
}