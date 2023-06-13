// Exercise 6
// Read over it, then complete the makeDrink method so that it:
// Only allows you make a drink if it’s a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don’t make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink

  const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (drinkType in this.drinkRequirements) {
        const requiredBeans = this.drinkRequirements[drinkType];
        if (requiredBeans <= this.beans) {
          this.beans -= requiredBeans;
          console.log(`Enjoy your ${drinkType}!`);
        } else {
          console.log("Sorry, we're all out of beans!");
        }
      } else {
        console.log(`Sorry, we don't make ${drinkType}.`);
      }
    }
  };
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); // should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); // should alert/console "Sorry, we're all out of beans"

// EXERCISE 6.1
// Don’t use any nested if statements!
  const coffeeShop2 = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}.`);
        return;
      }
  
      const requiredBeans = this.drinkRequirements[drinkType];
  
      if (requiredBeans > this.beans) {
        console.log("Sorry, we're all out of beans!");
        return;
      }
  
      this.beans -= requiredBeans;
      console.log(`Enjoy your ${drinkType}!`);
    }
  };
  
  coffeeShop2.makeDrink("latte"); 
  coffeeShop2.makeDrink("americano");
  coffeeShop2.makeDrink("filtered"); // should alert/console "Sorry, we don't make filtered"
  coffeeShop2.makeDrink("doubleShot");
  coffeeShop2.makeDrink("frenchPress"); // should alert/console "Sorry, we're all out of beans"
  
// Extension 1
// Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.
// The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.
// You decide how much the beans cost ~

const coffeeShop3 = {
    beans: 40,
    money: 100,
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}.`);
        return;
      }
  
      const requiredBeans = this.drinkRequirements[drinkType];
  
      if (requiredBeans > this.beans) {
        console.log("Sorry, we're all out of beans!");
        return;
      }
  
      this.beans -= requiredBeans;
      console.log(`Enjoy your ${drinkType}!`);
    },
  
    buyBeans: function (numBeans) {
      const cost = 0.5 * numBeans; // Cost per bean is 0.5 dollars
      
      if (this.money < cost) {
        console.log(`Sorry, you don't have enough money to buy ${numBeans} beans.`);
        return;
      }
  
      this.money -= cost;
      this.beans += numBeans;
      console.log(`You've bought ${numBeans} beans for $${cost}. Now you have ${this.beans} beans and $${this.money} left.`);
    }
  };
  
  coffeeShop3.buyBeans(20);
  coffeeShop3.makeDrink("latte");

// Extension 2
// This is a business! We need more money to buy more beans!
// Change the drinkRequirements object so that instead of latte: 10, it looks like this
// latte: {beanRequirement: 10, price: 5} - for each drink
// Create a buyDrink method that accepts 1 parameter: drinkType. The method should:
// Increase money depending on the price of drinkType
// Call the makeDrink method

const coffeeShop4 = {
    beans: 40,
    money: 100,
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 3},
      doubleShot: {beanRequirement: 15, price: 6},
      frenchPress: {beanRequirement: 12, price: 4}
    },
  
    makeDrink: function (drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}.`);
        return;
      }
      const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
      if (requiredBeans > this.beans) {
        console.log("Sorry, we're all out of beans!");
        return;
      }
      this.beans -= requiredBeans;
      console.log(`Enjoy your ${drinkType}!`);
    },
  
    buyBeans: function (numBeans) {
      const cost = 0.5 * numBeans;
      if (this.money < cost) {
        console.log(`Sorry, you don't have enough money to buy ${numBeans} beans.`);
        return;
      }
      this.money -= cost;
      this.beans += numBeans;
      console.log(`You've bought ${numBeans} beans for $${cost}. Now you have ${this.beans} beans and $${this.money} left.`);
    },
    
    buyDrink: function(drinkType) {
      if (!(drinkType in this.drinkRequirements)) {
        console.log(`Sorry, we don't make ${drinkType}.`);
        return;
      }
      const price = this.drinkRequirements[drinkType].price;
      this.money += price;
      console.log(`You've earned $${price} for a ${drinkType}.`);
      this.makeDrink(drinkType);
    }
  };
  
  coffeeShop4.buyDrink("doubleShot"); // Buys a latte
  coffeeShop4.buyBeans(30); // Buys 20 beans