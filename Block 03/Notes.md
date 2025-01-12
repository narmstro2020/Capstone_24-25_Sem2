
# JavaScript Functions Tutorial

## Table of Contents

1. Introduction to Functions
2. Function Declaration and Expression
3. Arrow Functions
4. The `this` Keyword in Functions
5. Default Parameters
6. Rest and Spread Operators
7. Closures and Lexical Scopes
8. IIFE (Immediately Invoked Function Expressions)
9. Assignments
10. Assignment Solutions

---

## 1. Introduction to Functions

### Vocabulary

- **Function**: A block of code designed to perform a particular task.
- **Parameter**: A variable listed inside the parentheses of a function definition.
- **Argument**: The value passed to a function when it is invoked.
- **Return Value**: The output of a function.

### Explanation

Functions are reusable blocks of code that perform specific tasks. They help reduce redundancy and make code more modular and maintainable.

**Example:**

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

**Reference:** [Introduction to Functions - W3Schools](https://www.w3schools.com/js/js_functions.asp)

---

## 2. Function Declaration and Expression

### Function Declaration

A **function declaration** defines a function with the `function` keyword.

**Syntax:**

```javascript
function functionName(parameters) {
    // Code block
}
```

**Example:**

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
```

### Function Expression

A **function expression** assigns a function to a variable.

**Syntax:**

```javascript
const functionName = function(parameters) {
    // Code block
};
```

**Example:**

```javascript
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // Output: 2
```

**Reference:** [Function Declaration and Expression - W3Schools](https://www.w3schools.com/js/js_function_definition.asp)

---

## 3. Arrow Functions

Arrow functions provide a concise syntax for writing functions.

**Syntax:**

```javascript
const functionName = (parameters) => {
    // Code block
};
```

**Example:**

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6
```

### Differences from Regular Functions

1. No `this` binding: Arrow functions inherit `this` from their surrounding context.
2. Cannot be used as constructors.

**Reference:** [Arrow Functions - W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)

---

## 4. The `this` Keyword in Functions

The `this` keyword refers to the context in which a function is called.

**Example:**

```javascript
const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
obj.greet(); // Output: Hello, my name is Alice
```

Arrow functions do not have their own `this` and use `this` from their lexical scope.

**Example:**

```javascript
const obj = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
obj.greet(); // Output: Hello, my name is undefined
```

**Reference:** [The `this` Keyword - W3Schools](https://www.w3schools.com/js/js_this.asp)

---

## 5. Default Parameters

Default parameters allow you to set default values for function arguments.

**Example:**

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
```

**Reference:** [Default Parameters - W3Schools](https://www.w3schools.com/js/js_function_parameters.asp)

---

## 6. Rest and Spread Operators

### Rest Operator

The rest operator allows a function to accept an indefinite number of arguments as an array.

**Example:**

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Spread Operator

The spread operator expands an array or object into individual elements.

**Example:**

```javascript
const arr = [1, 2, 3];
console.log(...arr); // Output: 1 2 3
```

**Reference:** [Rest and Spread Operators - W3Schools](https://www.w3schools.com/js/js_es6.asp)

---

## 7. Closures and Lexical Scopes

### Closure

A closure is a function that retains access to its outer scope even after the outer function has executed.

**Example:**

```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

### Lexical Scope

Lexical scope means that variables are accessible based on where they were declared.

**Reference:** [Closures and Scope - W3Schools](https://www.w3schools.com/js/js_function_closures.asp)

---

## 8. IIFE (Immediately Invoked Function Expressions)

An IIFE is a function that runs immediately after it is defined.

**Syntax:**

```javascript
(function() {
    console.log("IIFE executed");
})();
```

**Example:**

```javascript
const result = (function(a, b) {
    return a + b;
})(3, 4);
console.log(result); // Output: 7
```

**Reference:** [IIFE - W3Schools](https://www.w3schools.com/js/js_function_closures.asp)

---

