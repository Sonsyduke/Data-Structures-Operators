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

  // ES6 enhanced object literals
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
// WORKING WITH STRINGS - PART 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Douglas Lombard'.split(' '));

const [firstName, lastName] = 'Douglas Lombard'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

function capitalizename(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizename('jessica ann smit davis');
capitalizename('douglas lombard');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// Real world example
function maskCreditCard(number) {
  // This works because if one operate is a string it will convert the other
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4316284));
console.log(maskCreditCard(43194738456284));
console.log(maskCreditCard('3462834612647'));

// Repeat
const message2 = 'Bad Weather...All Departues Delayed... ';
console.log(message2.repeat(5));

function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'N'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

// ===================================
// WORKING WITH STRINGS - PART 2
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name

// function fixPassengersName(name) {
//   const toLower = name.toLowerCase();
//   const passengerCorrect = toLower[0].toUpperCase() + toLower.slice(1);
//   return passengerCorrect;
// }

// console.log(fixPassengersName('dOugLas'));

// Comparing emails
// const email = 'hello@douglas.io';
// const loginEmail = '   Hello@Douglas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// function checkingEmails(email1, email2) {
//   return email1 === email2;
// }
// console.log(checkingEmails(email, normalizedEmail));

// // Replacing strings
// const priceGB = '288,97#';
// const priceUS = priceGB.replace('#', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Using Reglular expression
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// }

// Practice Exercise
// function checkBaggage(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on baord');
//   } else {
//     console.log('Welcome aboard!');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Shock and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ===================================
// WORKING WITH STRINGS - PART 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// function checkMiddleSeat(seat) {
// B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat :(');
//   } else {
//     console.log('You got lucky :)');
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// JS converts the string to an object like this
// console.log(new String('jonas'));

// ===================================
// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(true));
// const correctAnswer = question.get(true);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// ===================================
// Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// ===================================
// Sets
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Douglas'));
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('risotto');
// orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staff);
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set('douglas lombard').size);

// ===================================
// Looping Objects

// Property NAMES
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(hours);
// console.log(values);

// Entries object
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// ===================================
// Optional Chaining
// if (restaurant.hours && restaurant.hours.mon) {
//   console.log(restaurant.hours.mon.open);
// }

// WITH optional chaining
// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exits');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exits');

// Arrays
// const users = [{ name: 'Douglas', email: 'douglas@gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

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
