"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest)
    hasDriversLicense = true;
if (hasDriversLicense)
    console.log("I can drive :D");
//Coding Challenge #1: Functions and Arrow Functions
const calcAverage = (score1, score2, score3) => {
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
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas}).`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins}).`);
    }
    else {
        console.log("No team wins.");
    }
};
checkWinner(scoreDolphins, scoreKoalas);
//Array Practice
const friends = ["Michael", "Steven", "Peter"];
// Coding Challenge 2: Arrays
const bills = [125, 555, 44];
const tips = [];
const total = [];
const calcTip = (bill) => {
    if (bill <= 300 && bill >= 50) {
        tips.push(bill * 0.15);
    }
    else {
        tips.push(bill * 0.2);
    }
};
const calcTotal = (bill) => {
    if (bill <= 300 && bill >= 50) {
        total.push(bill * 1.15);
    }
    else {
        total.push(bill * 1.2);
    }
};
calcTip(125);
calcTip(555);
calcTip(44);
calcTotal(125);
calcTotal(555);
calcTotal(44);
console.log(tips, total);
// Coding Challenge 3: Objects
const jSmith = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    BMI: 0
};
const mMiller = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: 0
};
const calcBMI = (mass, height) => {
    console.log(mass / Math.pow(height, 2));
    return mass / Math.pow(height, 2);
};
jSmith.BMI = calcBMI(jSmith.mass, jSmith.height);
mMiller.BMI = calcBMI(mMiller.mass, mMiller.height);
if (jSmith.BMI > mMiller.BMI) {
    console.log(`John's BMI (${jSmith.BMI}) is higher than Mark's (${mMiller.BMI}.)`);
}
else if (mMiller.BMI > jSmith.BMI) {
    console.log(`Mark's BMI (${mMiller.BMI}) is higher than John's (${jSmith.BMI}.)`);
}
