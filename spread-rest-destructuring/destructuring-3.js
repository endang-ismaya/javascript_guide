// Coding Revolution
// 2/2/2020

const users = {
  names: ['francis', 'martha', 'joyce']
};

const {
  names: [name1, name2, name3]
} = users;

console.log(name1, name2, name3); // francis martha joyce
