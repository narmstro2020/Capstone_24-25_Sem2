
# JavaScript ES6 Features and Beyond Tutorial

This tutorial covers the essential features introduced in ES6 (ECMAScript 2015) and beyond, with detailed explanations, vocabulary, examples, assignments, and solutions. By the end of this tutorial, you will have a comprehensive understanding of modern JavaScript features and how to use them effectively.

## Table of Contents
1. **Let, Const, and Block Scoping**
2. **Template Literals**
3. **Modules (Import/Export)**
4. **Classes**
5. **Promises and Async/Await**
6. **Symbols and Iterators**
7. **Generators**

---

## 1. Let, Const, and Block Scoping

### Vocabulary
- **Let**: A block-scoped variable declaration.
- **Const**: A block-scoped variable declaration that cannot be reassigned.
- **Block Scope**: Scope limited to a block, defined by `{}`.

### Explanation
- `let` and `const` are block-scoped, meaning their visibility is confined to the block in which they are defined.
- `var` is function-scoped or globally scoped, which often leads to bugs.
- Use `const` by default unless reassignment is necessary.
- The **Temporal Dead Zone** is the period during which the variable is not accessible even though it is declared, caused by hoisting.

### Examples
```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

if (true) {
    var a = 5;
    let b = 10;
    const c = 15;
    console.log(a, b, c); // 5, 10, 15
}

console.log(a); // 5
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
```


```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError

const gravity = 9.8;
// gravity = 10; // TypeError
```

---

## 2. Template Literals

### Vocabulary
- **Template Literal**: A string literal allowing embedded expressions.
- **Interpolation**: Embedding expressions within strings using `${}`.
- **Tagged Template Literal**: A special type of template literal that can modify output using a function.

### Explanation
Template literals use backticks (``) instead of quotes and support:
- Multiline strings.
- Expression interpolation.
- Tagged template literals allow preprocessing or custom transformations of string data.

### Examples
```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const html = `
<div>
    <h1>${name}</h1>
</div>
`;
console.log(html);

function tag(strings, ...values) {
    return strings[0] + values.map((v, i) => `[${v}]`).join('') + strings[strings.length - 1];
}
const message = tag`Hi ${name}, welcome to the course!`;
console.log(message); // Hi [Alice], welcome to the course!
```

```javascript
const userName = 'John';
const age = 25;
console.log(`Name: ${userName}, Age: ${age}`);

function capitalize(strings, ...values) {
    return strings.reduce((result, str, i) => result + str + (values[i]?.toUpperCase() || ''), '');
}
const result = capitalize`hello ${userName}, you are ${age} years old.`;
console.log(result); // hello JOHN, you are 25 years old.
```

---

## 3. Modules (Import/Export)

### Vocabulary
- **Export**: Makes code available to other files.
- **Import**: Brings exported code into a file.
- **Default Export**: A single export per file, which can be imported without curly braces.

### Explanation
Modules allow splitting code into reusable pieces. Use `export` to share code and `import` to include it. You can use named exports or default exports:
- Named Exports: Multiple exports per file.
- Default Export: Only one default export per file.

### Examples
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) {
    return a * b;
}

// app.js
import multiply, { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
```

```javascript
// utils.js
export const greet = name => `Hello, ${name}!`;
export const farewell = name => `Goodbye, ${name}.`;
export default function compliment(name) {
    return `${name}, you're awesome!`;
}

// app.js
import compliment, { greet, farewell } from './utils.js';
console.log(greet('Alice')); // Hello, Alice!
console.log(farewell('Alice')); // Goodbye, Alice.
console.log(compliment('Alice')); // Alice, you're awesome!
```

---

## 4. Classes

### Vocabulary
- **Class**: A blueprint for creating objects.
- **Constructor**: A special method for initializing an object.
- **Inheritance**: A way to extend a class to create a specialized version.
- **Static Method**: A method that belongs to the class rather than an instance.
- **Private Field**: A field prefixed with `#` that is only accessible within the class.

### Explanation
Classes provide a syntactic sugar for creating objects and managing inheritance. They support:
- Inheritance via `extends`.
- Static methods using the `static` keyword.
- Private fields using `#` (ES2021).

### Examples
```javascript
class Animal {
    #species;
    constructor(name, species) {
        this.name = name;
        this.#species = species;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    static isAnimal(obj) {
        return obj instanceof Animal;
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const rex = new Dog('Rex', 'Dog');
rex.speak(); // Rex barks.
console.log(Animal.isAnimal(rex)); // true
```

```javascript
class Vehicle {
    #type;
    constructor(type) {
        this.#type = type;
    }

    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super('Car');
        this.make = make;
        this.model = model;
    }

    describe() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.describe()); // Toyota Corolla
console.log(Vehicle.isVehicle(myCar)); // true
```

---

## 5. Promises and Async/Await

### Vocabulary
- **Promise**: Represents the eventual result of an asynchronous operation.
- **Async/Await**: Simplifies working with promises.
- **Promise.all**: Resolves when all promises in an array resolve.
- **Promise.race**: Resolves as soon as one promise in an array resolves.

### Explanation
Promises handle asynchronous operations. `async/await` makes asynchronous code look synchronous and simplifies error handling using `try/catch`.

### Examples
```javascript
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 1000));

async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Data
    } catch (error) {
        console.error('Error:', error);
    }
}

Promise.all([fetchData(), fetchData()]).then(results => {
    console.log(results); // ['Data', 'Data']
});

getData();
```
```javascript
const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data2'), 500));

async function fetchBoth() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log('Combined Data:', data1, data2);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchBoth();
```

---

## 6. Symbols and Iterators

### Vocabulary
- **Symbol**: A unique and immutable primitive value.
- **Iterator**: An object that defines a sequence and returns values on demand.
- **Iterable**: An object that can be iterated using `for...of` or spread syntax.

### Explanation
Symbols are used as unique identifiers, often for object properties. Iterators allow custom iteration. An object is iterable if it implements the `Symbol.iterator` method.

### Examples
```javascript
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of iterable) {
    console.log(value); // 1, 2, 3
}
```

---

## 7. Generators

### Vocabulary
- **Generator**: A function that can pause execution and yield values.
- **Yield**: A keyword to return a value and pause the generator function.
- **Generator Function**: A function declared with `function*` that can produce a sequence of values.

### Explanation
Generators provide a way to control function execution, making them useful for lazy evaluation, asynchronous workflows, and infinite sequences.

### Examples
```javascript
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infiniteGen = infiniteSequence();
console.log(infiniteGen.next().value); // 0
console.log(infiniteGen.next().value); // 1
```

```javascript
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2

function* evenNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i += 2;
    }
}

const evens = evenNumbers();
console.log(evens.next().value); // 0
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4
```

---

This concludes the JavaScript ES6 Features and Beyond tutorial. Continue practicing these features to build mastery!
