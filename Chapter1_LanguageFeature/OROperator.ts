const falseyValue = null;
const truthyValue = 'string';

const truthAssign = falseyValue || truthyValue;

console.log(truthyValue); // 'string'