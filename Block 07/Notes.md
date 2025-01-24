
# JavaScript Promises and Async/Await Tutorial

## Table of Contents
1. Introduction
2. Vocabulary
3. Promises
    1. What is a Promise?
    2. States of a Promise
    3. Creating and Using Promises
    4. Chaining Promises
    5. Error Handling with Promises
4. Async/Await
    1. Introduction to Async/Await
    2. Using Async Functions
    3. Await Syntax
    4. Error Handling with Try/Catch
5. Comparison Between Promises and Async/Await
6. Examples
    1. Fetch API Example with Promises
    2. Fetch API Example with Async/Await
7. Assignments
    1. Chaining Promises Assignment
    2. Async/Await Error Handling Assignment
8. Assignment Solutions

---

## 1. Introduction
In JavaScript, handling asynchronous operations is a common task. Promises and `async/await` provide powerful tools to work with asynchronous code in a more manageable and readable way. This tutorial will cover the fundamental concepts, examples, and practical use cases.

---

## 2. Vocabulary
- **Asynchronous**: Operations that execute independently of the main program flow, allowing the program to continue running other tasks.
- **Callback**: A function passed as an argument to another function to be executed later.
- **Promise**: An object representing the eventual completion or failure of an asynchronous operation.
- **Resolve**: The process of successfully completing a promise.
- **Reject**: The process of completing a promise with an error.
- **Pending**: The initial state of a promise before it is resolved or rejected.
- **Async**: A keyword used to define a function that handles asynchronous operations.
- **Await**: A keyword used to pause execution of an async function until a promise is resolved.

---

## 3. Promises

### 3.1 What is a Promise?
A promise is a JavaScript object that represents the eventual outcome of an asynchronous operation. It allows us to write cleaner and more predictable asynchronous code.

### 3.2 States of a Promise
- **Pending**: The promise is neither resolved nor rejected.
- **Fulfilled**: The operation completed successfully, and the promise is resolved.
- **Rejected**: The operation failed, and the promise is rejected.

### 3.3 Creating and Using Promises
```javascript
const myPromise = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result)) // Handles resolve
    .catch(error => console.error(error)); // Handles reject
```

### 3.4 Chaining Promises
```javascript
const promise1 = new Promise(resolve => resolve(10));

promise1
    .then(value => value * 2)
    .then(value => value + 5)
    .then(value => console.log(value)); // Output: 25
```

### 3.5 Error Handling with Promises
```javascript
const promiseWithError = new Promise((resolve, reject) => {
    reject("An error occurred!");
});

promiseWithError
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

## 4. Async/Await

### 4.1 Introduction to Async/Await
`async/await` is a modern syntax to handle asynchronous operations. It makes code easier to read and write compared to using `.then()` and `.catch()`.

### 4.2 Using Async Functions
```javascript
async function fetchData() {
    return "Data fetched!";
}

fetchData().then(result => console.log(result));
```

### 4.3 Await Syntax
```javascript
async function getNumber() {
    let promise = new Promise(resolve => setTimeout(() => resolve(42), 1000));
    let result = await promise;
    console.log(result); // Output: 42
}

getNumber();
```

### 4.4 Error Handling with Try/Catch
```javascript
async function fetchDataWithError() {
    try {
        let promise = new Promise((resolve, reject) => reject("Fetch failed!"));
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithError();
```

---

## 5. Comparison Between Promises and Async/Await
| Feature           | Promises                          | Async/Await                |
|-------------------|-----------------------------------|----------------------------|
| Syntax            | `.then()`, `.catch()`            | `async`, `await`           |
| Readability       | Moderate                         | High                       |
| Error Handling    | `.catch()`                       | `try/catch`                |

---

## 6. Examples

### 6.1 Fetch API Example with Promises
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
```

### 6.2 Fetch API Example with Async/Await
```javascript
async function fetchPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchPosts();
```

