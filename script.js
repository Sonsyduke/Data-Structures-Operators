'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES^ enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ===================================
// for ... of loops
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// Getting the index
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
// name: 'Capri',
// numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// ===================================
// Logical Assignment Operators

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (Null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// ===================================
// Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// Nullish: null and undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// ===================================
// Short Circuiting

// console.log('------ OR ------');

// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas now');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------ AND ------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ===================================
// REST Operator and Parameters

// 1) Destrucuturing
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 4, 52);
// add(2, 3, 34, 2, 3, 1);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenyCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT OBJECTS
// const str = 'Douglas';
// const letters = [...str, ' ', 'L.'];
// console.log(letters);
// console.log(...str);

// Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// ===================================
// DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Changing the variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 303;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ===================================
// DESTRUCTURING ARRAYS
// const numbers = [2, 3, 4];

// const [num1, num2, num3] = numbers;
// console.log(num1, num2, num3);
// console.log(numbers);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, u]] = nested;
// console.log(i, j, u);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
