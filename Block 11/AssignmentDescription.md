### Final Challenge
**Task**: Implement a pipeline function that applies multiple transformations to a number.

Start from this code snippet

```javascript
const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);
const increment = x => x + 1;
const doubleValue = x => x * 2;

const processNumber = pipe(increment, doubleValue);
console.log(processNumber(3)); // Output: 8
```

Add a squareValue function and a halveValue function and pass into the pipe.  