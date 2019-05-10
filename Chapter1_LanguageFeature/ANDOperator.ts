const falseyString = '';
const truthyString = 'thing';

const truthyAssign = truthyString && 'something';
const falseyAssign = falseyString && 'nothing';

console.log(truthyAssign.toString());
console.log(falseyAssign.toString());