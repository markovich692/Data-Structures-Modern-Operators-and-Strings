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

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

//Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let sign = `We are open ${properties.length} days a week: `;

// for (const day of properties) {
//   console.log(day);
//   sign = sign + `${day}, `;
// }

// console.log(sign);

//Property values
// const propertyValues = Object.values(openingHours);
// console.log(propertyValues);

//Entire object
// const entireObject = Object.entries(openingHours);
// console.log(entireObject);

// let sign = `We are open ${entireObject.length} days a week: `;

// for (const [key, { open, close }] of entireObject) {
//   sign = sign + `on ${key} we are open from ${open} to ${close}, `;
// }

// sign = sign + `enjoy your meal!`;
// console.log(sign);

// const scorerValues = Object.values(game.scored);
// console.log(scorerValues);

// for (const scorers of Object.values(game.scored)) {
//   console.log(scorers);
// }

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

// // const italianMexicanFoodsFusion = italianFoods.union(mexicanFoods);
// // console.log(italianMexicanFoodsFusion);

// // const italianMexicanCommonFoods = italianFoods.intersection(mexicanFoods);
// // console.log(italianMexicanCommonFoods);

// // const italianUniqueFoods = italianFoods.difference(mexicanFoods);
// // console.log(italianUniqueFoods);

// // const italianMexicanUniqueFoods =
// //   italianFoods.symmetricDifference(mexicanFoods);
// // console.log(italianMexicanUniqueFoods);

// const res = new Map();

// res
//   .set('name', 'La Sicile')
//   .set('address', '234 Grande Pizza 66')
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open D:')
//   .set(false, 'We are closed :)');

// const time = 12;

// // const available =
// //   time > res.get('open') && time < res.get('close')
// //     ? res.get(true)
// //     : res.get(false);

// // console.log(res.get(time > res.get('open') && time < res.get('close')));

// // const quiz = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'Python'],
// //   [4, 'JavaScript'],
// //   ['correct', 'JavaScript'],
// //   [true, 'Correct :D'],
// //   [false, 'Incorrect :('],
// // ]);

// const quiz = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'JavaScript'],
//   ['correct', 'JavaScript'],
//   [true, 'Correct :D'],
//   [false, 'Incorrect :('],
// ]);

// // console.log(quiz.get('question'));

// for (const [key, value] of quiz) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }

// const answer = Number(prompt(`your answer is:`));

// console.log(quiz.get(quiz.get(answer) === quiz.get('correct')));

// console.log([...quiz]);

//CHallenge 2

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with
// the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied
// how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in an ice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
// Hint: Note how the odds and the game objects have the same property names 😉
// 4. Bonus:Create an object called 'scorers' which contains the names of the players who scored
//  as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
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
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1
// for (const playerName of game.scored.entries()) {
//   console.log(`Goal ${playerName[0] + 1}: ${playerName[1]}`);
// }

//2
// const arrayOdds = Object.values(game.odds);
// let adds = 0;
// for (const oddsValue of Object.values(game.odds)) {
//   adds = adds + oddsValue;
// }
// console.log(adds / arrayOdds.length);

//3

// const entries = Object.entries(game);
// console.log(entries);
// const [[team1, team1Name], [team2, team2Name], , , , , odds] = entries;

// ([odds, { team1, team2 }]) = odds;

// const [key1, name1] = entries[0];
// const [key2, name2] = entries[1];
// const [odds, { team1, x, team2 }] = entries[6];
// console.log(`Odd of victory ${name1}: ${team1}
// Odd of draw: ${x}
// Odd of victory ${name2}: ${team2}`);

// console.log(Object.entries(game.odds));

// for (const [key, value] of Object.entries(game.odds)) {
//   const oddString =
//     key === 'x'
//       ? `Odd of draw : ${value} `
//       : `Odd of victory ${game[key]}: ${value} `;
//   console.log(oddString);
//   // game[key] && console.log(`Odd of victory ${game[key]}: ${value} `);
//   // game[key] || console.log(`Odd of draw : ${value} `);
// }

//4-Bonus
//Create an object called 'scorers' which contains the names of
//the players who scored as properties, and the number of goals
//as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }

//4 Bonus
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers.Gnabry);

//CODING CHALLENGE #4

// Let's continue with our football betting app! This time, we have a map
// called 'gameEvents' (see below) with a log of the events that happened
// during the game. The values are the events themselves, and the keys are
// the minutes in which each event happened (a football game has 90 minutes
// plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened
// (no duplicates)
// 2. After the game has finished,is was found that the yellow card from
// minute 64 was unfair.So remove this event from the game events log.
// 3. Compute and log the following string to the console:"An event happened,
// on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console,marking whether
// it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀
