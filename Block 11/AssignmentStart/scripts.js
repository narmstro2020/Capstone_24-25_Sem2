const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
const increment = x => x + 1;
const doubleValue = x => x * 2;
const tripleValue = x => x * 3;
const processNumber = pipe(increment, doubleValue, tripleValue);
console.log(processNumber(3)); // Output: 8