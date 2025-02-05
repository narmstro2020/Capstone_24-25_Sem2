# JavaScript Functional Programming Tutorial

## Introduction
Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. JavaScript supports functional programming concepts, making it a powerful language for functional-style coding.

---

## 1. Vocabulary

- **First-Class Functions**: Functions that can be assigned to variables, passed as arguments, and returned from other functions.
- **Higher-Order Functions**: Functions that take other functions as arguments or return them as results.
- **Pure Functions**: Functions that always produce the same output for the same input and have no side effects.
- **Side Effects**: Any operation that modifies a state outside its local scope, such as modifying global variables or I/O operations.
- **Function Composition**: The process of combining multiple functions to build more complex ones.
- **Currying**: Transforming a function with multiple arguments into a series of functions, each taking a single argument.
- **Partial Application**: Pre-filling some arguments of a function to create a new function.
- **Immutable Data**: Data that cannot be changed after it's created.

---

## 2. Higher-Order Functions
### Definition
Higher-order functions (HOFs) are functions that either accept functions as parameters or return functions.

### Example
```javascript
function higherOrderFunction(callback) {
    return callback();
}

function sayHello() {
    return "Hello, World!";
}

console.log(higherOrderFunction(sayHello)); // Output: Hello, World!
```

### Assignment
**Task**: Implement a function `applyOperation` that takes two numbers and a callback function to perform an operation on them.

```javascript
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(applyOperation(5, 3, add)); // Output: 8
```

---

## 3. Functional Utilities: Map, Reduce, and Filter

### Map
Used to transform each element in an array.
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### Filter
Used to filter elements based on a condition.
```javascript
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### Reduce
Used to accumulate values in an array.
```javascript
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

### Assignment
**Task**: Implement a function that takes an array of numbers and returns the sum of all even numbers.
```javascript
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
```

---

## 4. Pure Functions and Side Effects

### Pure Functions
A function is pure if it:
1. Always produces the same output for the same input.
2. Has no side effects.

Example:
```javascript
function pureAdd(a, b) {
    return a + b;
}
```

### Side Effects
A function with side effects modifies external state.
```javascript
let counter = 0;
function increment() {
    counter++;
}
```

---

## 5. Function Composition
Combining multiple functions into one.
```javascript
const multiplyBy2 = num => num * 2;
const subtract3 = num => num - 3;
const compose = (f, g) => x => f(g(x));

const newFunction = compose(multiplyBy2, subtract3);
console.log(newFunction(5)); // Output: 4
```

---

## 6. Currying and Partial Application

### Currying
Transforms a function into a sequence of unary functions.
```javascript
const curriedAdd = a => b => a + b;
console.log(curriedAdd(3)(4)); // Output: 7
```

### Partial Application
Pre-filling some arguments.
```javascript
const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10
```
---

## Summary
- Higher-order functions allow flexibility in function design.
- `map`, `reduce`, and `filter` are essential functional utilities.
- Pure functions help maintain predictable behavior.
- Function composition enables modularity.
- Currying and partial application enable reusable function patterns.



This tutorial covers essential functional programming concepts in JavaScript, providing clear explanations, examples, and assignments with solutions. Happy coding!
