/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Colt Steele
// 1/7/2020

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}
0