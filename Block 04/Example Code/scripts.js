// const person = {
//     name: "John",
//     age: 30,
//     isEmployed: true
// };
//
// console.log(person);
//
// const person2 = {};
// person2.name = "John";
// person2.age = 30;
// person2.isEmployed = true;
//
//
// class Person1 {
//     constructor(name, age, isEmployed) {
//         this.name = name;
//         this.age = age;
//         this.isEmployed = isEmployed;
//         this.speak = function(){
//             console.log(`${this.name} makes a noise.`);
//         };
//     }
//
//
// }
//
function Person2(name, age, isEmployed) {
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
    this.speak = function(){
        console.log(`${this.name} makes a noise.`);
    };
}
//
//
//
// const person3 = new Person1("John", 30, true);
//
// for (let key in person3){
//     console.log(`${key}: ${person3[key]}`)
// }
//
// const target = {};
// Object.assign(target, person3);
//
// const obj = {};
// console.log(obj.prototype);
//
// function Animal(name){
//     this.name = name;
// }
//
// Animal.prototype.speak = function(){
//     console.log(`${this.name} makes a noise.`);
// };
//
// const dog = new Animal("Dog");
// const cat = new Animal("Cat");
// dog.speak();
// cat.speak();
//
// console.log(dog);
// console.log(person3);



const fruits = ["Apple", 5, "Cherry"];
console.log(fruits);
console.log(Person2);
console.log(fruits);


const fruits2 = ["Apple", "Banana", "Cherry"];

fruits.push("Date");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.splice(1, 1, "Blueberry");
console.log(fruits);

const citrus = fruits.slice(1, 3);
console.log(citrus);

const allFruits = fruits.concat(citrus);
console.log(allFruits);

allFruits.forEach(fruit => console.log(fruit));

const upperFruits = allFruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

const person = {
    name: "John",
    age: 30,
    isEmployed: true
};

const { name, age } = person;
console.log(name, age);

// const[first, last] = fruits;
// console.log(first, last);

const [first, ...rest] = fruits;
console.log(first);
console.log(rest);

const newFruits = [...fruits, "Elberberry"];
console.log(newFruits);

//Assignment Starter Stuff
book = {
    title: "Time Enough For Love",
    getSummary: function(){
        console.log(this.title);
    }
}

