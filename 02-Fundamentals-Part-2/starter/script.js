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
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
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
calcAverage(44, 23, 71);
calcAverage(65, 74, 49);
