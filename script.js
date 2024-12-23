'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables'players1'and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const {
//   // team1,
//   // team2,
//   players: [players1, players2],
// } = game;

// // console.log(team1);
// // console.log(players1);
// // console.log(team1);
// // console.log(team2);

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;
// console.log(draw);

// const printGoals = function (...players) {
//   console.log(players, players.length);
// };

// printGoals(...game.scored);

// console.log(team1 < team2 && 'Team1 is more likely to win');
// console.log(team1 > team2 && 'Team2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Using the for-of loop
// for (const item of menu) console.log(item);

//Index in the for-of loop
// for (const item of menu.entries()) {
//   const [number, menuName] = item;
//   console.log(`${number}: ${menuName} `);
// }

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(openingHours);
// console.log(openingHours.wed?.open);

// for (const day of weekDays.entries()) {
//   console.log(`day ${day[0] + 1}:${day[1]}`);
// }

const openingHours = {
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
};

for (const day of openingHours) {
  console.log(day);
}
