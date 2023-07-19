// Spot Check 2
// class Human {
//     constructor (name, age, isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }

//     introduce() {
//         let tell = `Hi, I'm ${this.name}. I'm ${this.age} and I ${this.isFriendly ? 'like you' : 'hate you'} `
//         console.log(tell)
//     }
// }
// const h1 = new Human('Eva', 18, true)
// const h2 = new Human('Adam', 19, false)
// h1.introduce()
// h2.introduce()

// Spot Check 4
// class Vehicle{
//     constructor (x, y, speed) {
//       this.x = x;
//       this.y = y;
//       this.speed = speed;
//       this._fuel;
//       Vehicle.carsSold++;
//     }

//     set fuel(fuel) {
//         if (fuel >= 0 && fuel <= 150){
//             this._fuel = fuel
//         } else {
//             console.log('Not normal fuel')
//         }
//     }
//     get fuel() {
//         return this._fuel
//     }

//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney() {
//         console.log(`Made ${Vehicle.carsSold * 30000} dollars`)
//     }
// }
// Vehicle.carsSold = 0

// const c1 = new Vehicle(1, 2, 30)
// const c2 = new Vehicle(1, 2, 30)
// const c3 = new Vehicle(1, 2, 30)

// Vehicle.calculateMoney()

// c2.fuel = -5
// c2.fuel = 151
// c2.fuel = 149
// console.log(c2.fuel)

class Trip{
    constructor(destination, date){
        this.dest = destination
        this.date = date
        this.plan = []
    }
}

let t = Trip("Guadalupe", new Date())