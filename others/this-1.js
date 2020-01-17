// Colt Steele
// 1/12/2020

const annoyer = {
  phrases: ['literally', 'cray cray', "I can't even", 'Totes', 'YOLO', "Can't Stop, Won't Stop"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      // using arrow function to get 'this' as refer to object not to windows
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log(`Everything is stop now!`);
  }
};

annoyer.start();

setTimeout(function() {
  annoyer.stop();
}, 9500);
