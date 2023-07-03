// Create a Bank module. It should have a variable and two functions:
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money
const Bank = function () {
    let _money = 500
    return {
        deposit: additionalMoney => _money  += additionalMoney,
        showBalance: () => console.log(_money)
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950