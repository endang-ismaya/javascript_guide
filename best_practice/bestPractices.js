// 1. Avoid Global Variables
// - name clashes
// - contain globals within a single
// - Always try to utilize local variables vs defaulting to globals

// Make an object
var myProjMain = {
  now: new Date(),
  titles: {
    headline: 'MyProj App',
    about: 'About Us',
    contact: 'Contact Us'
  },
  initCount: 100
};

// closures
var myProjMainClosures = (function() {
  function selectionSummary() {
    // summary logic
  }

  return {
    summary: function() {
      selectionSummary();
    }
    // additional properties
  };
})();

// Ternary function invocation
var isMember = true;
var isPaidUp = false;
var memberStatus = isMember && isPaidUp ? 'Member' : 'Visitor';
console.log('Access Status:', memberStatus);
