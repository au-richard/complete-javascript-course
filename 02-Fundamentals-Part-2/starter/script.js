"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//Coding Challenge #1: Functions and Arrow Functions
const finalScores = [];
const calcAverage = (score1, score2, score3) => {
  const avgScore = (score1 + score2 + score3) / 3;
  finalScores.push(avgScore);
  return finalScores;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas}).`);
  }
};

calcAverage(44, 23, 71);
calcAverage(65, 74, 49);
