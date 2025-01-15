
# JavaScript Objects and Arrays Tutorial

## Vocabulary

### Objects
- **Object**: A collection of key-value pairs where keys are strings (or Symbols) and values can be any data type. [Learn more](https://www.w3schools.com/js/js_objects.asp)
- **Property**: A key-value pair in an object.
- **Method**: A function stored as a property of an object.
- **Prototype**: The mechanism by which JavaScript objects inherit features from one another. [Learn more](https://www.w3schools.com/js/js_object_prototypes.asp)

### Arrays
- **Array**: A list-like object used to store multiple values in a single variable. [Learn more](https://www.w3schools.com/js/js_arrays.asp)
- **Index**: The position of an element in an array, starting from 0.
- **Element**: An individual item in an array.
- **Mutator Method**: An array method that modifies the array (e.g., `push`, `pop`). [Learn more](https://www.w3schools.com/js/js_array_methods.asp)
- **Accessor Method**: An array method that does not modify the array (e.g., `slice`, `concat`).

---

## Sections

### 1. Object Creation and Manipulation

#### Creating Objects
Objects in JavaScript can be created in multiple ways:

1. **Object Literal**:
```javascript
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};
```

2. **Object Constructor**:
```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.isEmployed = true;
```

3. **Using Classes**:
```javascript
class Person {
    constructor(name, age, isEmployed) {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
}

const person = new Person("John", 30, true);
```

#### Manipulating Objects

- **Adding Properties**:
```javascript
person.city = "New York";
```

- **Updating Properties**:
```javascript
person.age = 31;
```

- **Deleting Properties**:
```javascript
delete person.isEmployed;
```

#### Iterating Through Objects

- **Using `for...in`**:
```javascript
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

[Learn more about objects](https://www.w3schools.com/js/js_objects.asp)

---

### 2. Object Methods

#### Built-in Methods

1. **`Object.keys`**: Returns an array of keys.
```javascript
console.log(Object.keys(person));
```

2. **`Object.values`**: Returns an array of values.
```javascript
console.log(Object.values(person));
```

3. **`Object.entries`**: Returns an array of key-value pairs.
```javascript
console.log(Object.entries(person));
```

4. **`Object.assign`**: Copies properties from one object to another.
```javascript
const target = {};
Object.assign(target, person);
console.log(target);
```

[Learn more about object methods](https://www.w3schools.com/js/js_object_methods.asp)

---

### 3. Prototypes and Inheritance

#### Prototypes
Every object in JavaScript has an internal property called `[[Prototype]]`, which can be accessed using `Object.getPrototypeOf` or `__proto__`.

```javascript
const obj = {};
console.log(Object.getPrototypeOf(obj));
```

#### Inheritance
Using prototypes, objects can inherit properties and methods from other objects.

```javascript
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak();
```

[Learn more about prototypes and inheritance](https://www.w3schools.com/js/js_object_prototypes.asp)

---

### 4. Arrays and Array Methods

#### Creating Arrays

1. **Array Literal**:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
```

2. **Using the `Array` Constructor**:
```javascript
const fruits = new Array("Apple", "Banana", "Cherry");
```

#### Common Array Methods

1. **Mutator Methods**:
    - `push`: Adds elements to the end.
    - `pop`: Removes the last element.
    - `splice`: Adds/removes elements at specific indices.

   ```javascript
   fruits.push("Date");
   fruits.pop();
   fruits.splice(1, 1, "Blueberry");
   ```

2. **Accessor Methods**:
    - `slice`: Extracts a section of the array.
    - `concat`: Joins arrays together.

   ```javascript
   const citrus = fruits.slice(1, 3);
   const allFruits = fruits.concat(citrus);
   ```

3. **Iteration Methods**:
    - `forEach`: Executes a function for each element.
    - `map`: Creates a new array by applying a function to each element.
    - `filter`: Creates a new array with elements that pass a test.

   ```javascript
   fruits.forEach(fruit => console.log(fruit));
   const upperFruits = fruits.map(fruit => fruit.toUpperCase());
   const filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
   ```

[Learn more about arrays and array methods](https://www.w3schools.com/js/js_array_methods.asp)

---

### 5. Restructuring Objects and Arrays

#### Destructuring Objects

```javascript
const { name, age } = person;
console.log(name, age);
```

#### Destructuring Arrays

```javascript
const [first, second] = fruits;
console.log(first, second);
```

#### Rest and Spread

- **Rest**:
```javascript
const [first, ...rest] = fruits;
console.log(rest);
```

- **Spread**:
```javascript
const newFruits = [...fruits, "Elderberry"];
```

[Learn more about destructuring and spread/rest](https://www.w3schools.com/js/js_es6.asp)

---