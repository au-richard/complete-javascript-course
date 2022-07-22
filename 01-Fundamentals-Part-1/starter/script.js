let js = "amazing";

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

let firstName = "Matilda";
let jonas_matilda = "JM";
let _jonas = "Jonas";

// console.log(firstName);

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
// console.log(myFirstJob);

//Combining variables into console log
const country = "Canada";
const continent = "North America";
let population = 38000000;
// console.log(
//   `${country} is located in ${continent}, and has a population of ${population}.`
// );

let isIsland = true;
isIsland = "USA";
let language;
// console.log(
//   `isIsland: ${isIsland}, population: ${population}, country: ${country}, language: ${language}`
// );

language = "English";
// console.log(
//   `isIsland: ${isIsland}, population: ${population}, country: ${country}, language: ${language}`
// );

//Adding 1 to total population
const halfPopulation = population / 2;
population += 1;
const finlandPop = 6000000;

// console.log(population > finlandPop);
// console.log(
//   `${country} is located in ${continent}, and has a population of ${population}. People there speak ${language}.`
// );

//Coding Challenge #1: Calculate BMI
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;
let markBMI = (markWeight / Math.pow(markHeight, 2)).toFixed(1);
let johnBMI = (johnWeight / Math.pow(johnHeight, 2)).toFixed(1);
let markHigherBMI = markBMI > johnBMI;
// console.log("Mark's BMI:", markBMI);
// console.log("John's BMI:", johnBMI);
// console.log(markHigherBMI);

//Coding Challenge #2: Use Template Literal and condition to print which person has higher BMI.
// if (!markHigherBMI) {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// } else if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// }

//Type Conversion and Coercion Practice
// console.log("9" - "5"); // = 4 because type conversion to number
// console.log("19" - "13" + "17"); // = 617
// console.log("19" - "13" + 17); // = 23
// console.log("123" < 57); // = false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // = 1143

//Equality Operators Practice
// const numNeighbours = 1;

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border.");
// } else {
//   console.log("No border.");
// }

//Logical Operators Practice
if (language === "English" && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}.`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

//Coding Challenge #3: Calculating Avg, Min, Max
// const dScore1 = 96;
// const dScore2 = 89;
// const dScore3 = 108;
// const kScore1 = 88;
// const kScore2 = 91;
// const kScore3 = 110;
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;
// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 123;
const dScore1 = 97;
const dScore2 = 112;
const dScore3 = 101;
const kScore1 = 109;
const kScore2 = 95;
const kScore3 = 106;
const dAvgScore = (dScore1 + dScore2 + dScore3) / 3;
const kAvgScore = (kScore1 + kScore2 + kScore3) / 3;

if (dAvgScore >= 100 && dAvgScore > kAvgScore) {
  console.log("The Dolphins win!");
} else if (kAvgScore >= 100 && kAvgScore > dAvgScore) {
  console.log("The Koalas win!");
} else if (kAvgScore >= 100 && dAvgScore >= 100 && kAvgScore === dAvgScore) {
  console.log("There is a draw.");
}

//Switch Statement Practice
language = "Mandarin";
switch (language) {
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language.");
    break;
  default:
    console.log("Great language too.");
}

//Ternary Operator Practice
population > 33000000
  ? console.log("Canada's population is greater than 33 million.")
  : console.log("Canada's population is less than 33 million.");

//Conding Challenge #4: Calculating Restaurant Tip
const bill = 800;
const tip = bill <= 300 && bill >= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`bill = ${bill}, tip = ${tip}, total is ${total}.`);
