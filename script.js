'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(`${mainIngredient}`);
    console.log(`${otherIngredient}`);
  },
};

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// DESTRUCTURING ARRAY
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Using Destructiring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// Nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// SPREAD
// const arr = [7, 8, 9];
// const newArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newArr);

// const brandNewArr = [1, 2, ...arr];
// console.log(brandNewArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects

// const str = 'Douglas';
// const letters = [...str, ' ', 'L.'];
// console.log(letters);
// console.log(...str);

// REAL WORLD EXAMPLE
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Let's make pasta! Ingredient 2? "),
//   prompt("Let's make pasta! Ingredient 3? "),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// OBJECTS
// const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Douglas' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST PATTERNS AND PARAMETERS
// 1) Destructuring
// Spread, because on RIGHT side of =
// const arr = [1, 2, 3, ...[4, 5]];

// REST, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects (REST)
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//     // console.log(numbers[i]);
//   }
//   console.log(total);
// };
// add(1, 2);
// add(1, 2, 5);
// add(1, 2, 4, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// SHORT CIRCUITING (&& and ||)
// console.log('---------- OR ----------');
// User ANY data type, return ANY datat type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---------- AND ----------');
// console.log(0 && 'Douglas');
// console.log(7 && 'Douglas');
// console.log('Hello' && 23 && null && 'douglas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.order && restaurant.orderPizza('mushrooms', 'spinach');

// NULLISH COALESCING OPERATOR
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or "");
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// LOGICAL ASSIGNMENT OPERATORS

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// LOGICAL OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYYMOUS>';
// rest2.owner = rest2.owner && '<ANONYYMOUS>';

// LOGICAL AND ASSIGNMENT OPERATOR
// rest1.owner &&= '<ANONYYMOUS>';
// rest2.owner &&= '<ANONYYMOUS>';

// console.log(rest1);
// console.log(rest2);

// FOR ...OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}
