# JavaScript and JSON Tutorial

## 1. JSON Files

### Vocabulary

| Term          | Definition |
|--------------|------------|
| JSON (JavaScript Object Notation) | A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. |
| Key-Value Pair | The fundamental structure of JSON, where each key has an associated value. |
| Object | A collection of key-value pairs enclosed in curly braces `{}`. |
| Array | An ordered list of values enclosed in square brackets `[]`. |
| String | A sequence of characters enclosed in double quotes `""`. |
| Number | A numeric value without quotes. |
| Boolean | A value that is either `true` or `false`. |
| Null | A special value that represents "no value". |

### Description
JSON is widely used for data storage and communication between a client and a server. JSON is language-independent but primarily used in JavaScript applications.

### Example JSON File
Here is an example of a JSON file:

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}
```

### JSON Structure
- The file starts and ends with `{}` (indicating an object).
- Each key is a string enclosed in `""`.
- The value can be a string, number, boolean, array, object, or null.
- Key-value pairs are separated by commas.

## 2. Working with JSON in JavaScript

### Vocabulary

| Term            | Definition |
|----------------|------------|
| JSON.parse()   | Converts a JSON string into a JavaScript object. |
| JSON.stringify() | Converts a JavaScript object into a JSON string. |
| Fetch API      | A modern interface for fetching resources, often used to retrieve JSON data. |
| LocalStorage   | A web storage API that allows storing JSON data persistently in a user's browser. |

### Description
JavaScript provides built-in methods to handle JSON data efficiently. The most commonly used methods are `JSON.parse()` and `JSON.stringify()`.

### Parsing JSON Data
To convert a JSON string into a JavaScript object:

```javascript
const jsonString = '{ "name": "Alice", "age": 25, "city": "London" }';
const parsedData = JSON.parse(jsonString);
console.log(parsedData.name); // Output: Alice
```

### Converting JavaScript Object to JSON
To convert a JavaScript object into a JSON string:

```javascript
const person = {
  name: "Bob",
  age: 40,
  isEmployed: true
};
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
```

### Fetching JSON from an API

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching JSON:', error));
```

### Storing JSON Data in LocalStorage

```javascript
const userData = {
  username: "john_doe",
  email: "john@example.com"
};
localStorage.setItem("user", JSON.stringify(userData));
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.username); // Output: john_doe
```

## More Examples

### More Examples 1: Convert and Parse JSON
1. Create a JSON string representing a book with title, author, and year published.
2. Convert the JSON string into a JavaScript object and log the title to the console.

### More Examples 2: Fetch and Display JSON Data
1. Use the Fetch API to retrieve JSON data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
2. Parse the response and log the `title` of the todo item.

### More Examples 3: Store and Retrieve JSON Data
1. Create a JavaScript object representing a shopping cart with items (each having a name and price).
2. Store it in `localStorage`.
3. Retrieve it from `localStorage` and display each item's name in the console.

## More Examples Solutions

### More Examples Solution 1: Convert and Parse JSON

```javascript
const bookJson = '{ "title": "JavaScript Basics", "author": "John Smith", "year": 2021 }';
const bookObject = JSON.parse(bookJson);
console.log(bookObject.title); // Output: JavaScript Basics
```

### More Examples Solution 2: Fetch and Display JSON Data

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data.title))
  .catch(error => console.error('Error:', error));
```

### More Examples Solution 3: Store and Retrieve JSON Data

```javascript
const cart = [
  { name: "Laptop", price: 999.99 },
  { name: "Mouse", price: 25.50 },
  { name: "Keyboard", price: 49.99 }
];
localStorage.setItem("shoppingCart", JSON.stringify(cart));
const retrievedCart = JSON.parse(localStorage.getItem("shoppingCart"));
retrievedCart.forEach(item => console.log(item.name));
```
