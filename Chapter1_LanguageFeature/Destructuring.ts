const values: number[] = [1, 3, 5, 6, 8, 9];

const [first, second] = values;
console.log(`first is ${first}, seconds is ${second}`);

const food: string[] = ['Peach', 'apple', 'pear'];

const [faverate, secondlike, ...rest] = food;
typeof faverate === 'string' 
rest instanceof Array //true
console.log(`The rest should be the rest: ${rest}, and the type should ${rest}`);

// Use Tuples with destructuring
function getLandmarks(): [string, string, string]{
    return ['London', 'Paris', 'Washinton'];
}
const [firstLM, secondLM, thirdLM] = getLandmarks();