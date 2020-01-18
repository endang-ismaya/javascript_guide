// Colt steele
// 1/18/2020

/*
  A Promise is an object representing the eventual completion or failure
  of an asynchronous operation
 */

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve(rand);
      } else {
        reject(rand);
      }
    }, 3000);
  });
};

makeDogPromise()
  .then(rand => {
    console.log(`You got your dog! rand: ${rand}`);
  })
  .catch(rand => {
    console.log(`no dog available!: rand: ${rand}`);
  });
