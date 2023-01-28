// __proto__ vs prototype

// __proto__
// __proto__ є в кожного об'єкту. Все в JS - об'єкт.
// __proto__ це посилання на прототип класу, яким створений об'єкт
// __proto__ екземплярів однакових класів === один одному

// prototype
// prototype є тільки у класів і функцій
// prototype однієї сутності НІКОЛИ не === prototype іншої

// const Car = function({brand, model, price} = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//  }

//  Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice
//  }

//  class Car2 {
//   constructor({brand, model, price} = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice
//   }
//  }

//  const a6 = new Car({brand: 'audi', model: 'a6', price: 30000})
//  const a7 = new Car({brand: 'audi', model: 'a7', price: 30000})
//  console.log(a6)
//  a6.changePrice(35000)
//  console.log(a6)  

 // kahoot

 // obj prop
 const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100
 }
 const hotelName = 'name'

 console.log(hotel.hotelName);
 console.log(hotel["hotelName"]);
 console.log(hotel[hotelName]);

 // closure
 function a() {
  const b = a + 1;
  return function c () {
    const x = c + b;
  }
 }


