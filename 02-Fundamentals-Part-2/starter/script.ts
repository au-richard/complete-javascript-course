let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//Coding Challenge #1: Functions and Arrow Functions
const calcAverage = (score1: number, score2: number, score3: number) => {
  return (score1 + score2 + score3) / 3;
};

//Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

//Test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);



const checkWinner = (avgDolphins: number, avgKoalas: number) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins}).`);
  } else {
    console.log("No team wins.");
  }
};

checkWinner(scoreDolphins, scoreKoalas);


//Array Practice
const friends: string[] = ["Michael", "Steven", "Peter"];

// Coding Challenge 2: Arrays
const calcTip = (bill: number) => {
  if (bill <= 300 && bill >= 50) {
    bill * 0.15;
  } else {
    bill * 0.2;
  }
};