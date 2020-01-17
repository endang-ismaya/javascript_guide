// Steven Hancock
// 1/5/2020

let learner = {
  firtName: 'Endang',
  lastName: 'Ismaya',
  scores: {
    s1q1: '5:8',
    s1q2: '9:10',
    s1q3: null,
    s1q4: '1:5',
    s1q5: '12:15',
    s2q1: '6:8',
    s2q2: null,
    s2q3: '4:20',
    s2q4: null,
    s3q1: null,
    s3q2: '6:10',
    s3q3: '7:7'
  }
};

const pullScrores = function(obj, section = 1, callback) {
  let scores = {};

  for (let i = 0; i < Object.keys(obj.scores).length; i++) {
    let key = Object.keys(obj.scores)[i];
    if (key.includes('s') + section) {
      let val = obj.scores[key];
      // callback testing
      if (typeof callback === 'function') {
        val = callback(val);
      }
      scores[key] = val;
    }
  }

  // for (let key in obj.keys(scores)) {
  //   if (key.includes('s') + section) {
  //     let val = obj.scores[key];

  //     // callback testing
  //     if (typeof callback === 'function') {
  //       val = callback(val);
  //     }
  //     scores[key] = val;
  //   }
  // }

  return scores;
};

let testObj = pullScrores(learner, 1);
console.log(testObj);

let testObjCallback = pullScrores(learner, 1, function(val) {
  if (val === null) {
    return 0;
  }
  return val;
});
console.log(testObjCallback);
