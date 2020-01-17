/* jshint esversion: 6 */

// Standard Module Pattern
const UICtrl = (function() {
  let _text = 'This is private variable';

  // this is private function
  const changeText = function() {
    const element = document.querySelector('h2');
    element.textContent = _text;
  };

  // any returns are become public
  return {
    callChangeText: function() {
      changeText();
    }
  };

})();

// test UICtrl
UICtrl.callChangeText();

// Revealing Module Pattern
const UICtrlRevealing = (function() {
  let datas = [];

  function add(item) {
    datas.push(item);
    console.log('Item Added');
  }

  function get(id) {
    return datas.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };

})();

UICtrlRevealing.add({id: 1, name: 'John'});
UICtrlRevealing.add({id: 2, name: 'Smith'});
console.log(UICtrlRevealing.get(1));
