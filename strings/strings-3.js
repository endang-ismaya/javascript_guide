const bracket = 'ingressQosMarking[0]  ';

console.log(bracket.indexOf('['));
console.log(bracket.slice(0, bracket.indexOf('[')));

const xLiner = ' >>> reservedBy = ManagedElement=CLL04251,ENodeBFunction=1';

const splits = xLiner.split(' = ');
console.log(splits);

let managedObject = {};

managedObject['obj1']['obj2'] = 'test';
