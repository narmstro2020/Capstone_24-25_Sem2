# TypeScript Complete Tutorial

## Introduction to TypeScript
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It provides optional static typing, interfaces, and improved tooling support, making it an excellent choice for large-scale JavaScript applications.

### Key Features of TypeScript
- **Static Typing**: Helps detect errors at compile time.
- **Interfaces**: Define structured object types.
- **Classes and Objects**: Supports object-oriented programming.
- **Enums**: Allows defining named constants.
- **Generics**: Enables reusable, type-safe code.
- **Modules**: Supports modular programming.
- **Compilation to JavaScript**: Runs on any JavaScript engine.

## Installation and Setup
### Installing TypeScript
To install TypeScript globally using npm:
```sh
npm install -g typescript
```

To check the installed version:
```sh
tsc --version
```

### Setting Up a TypeScript Project
1. Create a new project folder:
   ```sh
   mkdir my-typescript-project
   cd my-typescript-project
   ```
2. Initialize a TypeScript project:
   ```sh
   tsc --init
   ```
3. This generates a `tsconfig.json` file, which you can configure as needed.

### Compiling TypeScript Code
Create a simple TypeScript file:
```ts
// hello.ts
let message: string = "Hello, TypeScript!";
console.log(message);
```
Compile it to JavaScript:
```sh
tsc hello.ts
```
This generates `hello.js`, which can be executed with Node.js:
```sh
node hello.js
```

## TypeScript Basics
### Variables and Types
```ts
let isDone: boolean = false;
let age: number = 30;
let name: string = "John";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let anything: any = "Can be anything";
```

### Functions
```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));
```

### Interfaces
```ts
interface Person {
  name: string;
  age: number;
}

let user: Person = { name: "Alice", age: 25 };
```

### Classes
```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

let dog = new Animal("Dog");
dog.speak();
```

## Advanced TypeScript
### Generics
```ts
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<string>("Hello"));
console.log(identity<number>(42));
```

### Enums
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
```

### Modules
Create a module `math.ts`:
```ts
export function add(a: number, b: number): number {
  return a + b;
}
```
Import and use it in `main.ts`:
```ts
import { add } from "./math";
console.log(add(10, 20));
```

### Decorators
```ts
function Logger(constructor: Function) {
  console.log("Logging...", constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}
let person = new Person();
```

## TypeScript with Frontend Frameworks
### TypeScript with React
Install TypeScript support:
```sh
npx create-react-app my-app --template typescript
```
Define a component with TypeScript:
```tsx
interface Props {
  name: string;
}
const Greeting: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
export default Greeting;
```

### TypeScript with Angular
Install Angular CLI:
```sh
npm install -g @angular/cli
```
Create a new Angular project with TypeScript:
```sh
ng new my-angular-app
cd my-angular-app
ng serve
```

## TypeScript and Node.js
To use TypeScript with Node.js:
1. Initialize a Node.js project:
   ```sh
   npm init -y
   ```
2. Install TypeScript and dependencies:
   ```sh
   npm install typescript ts-node @types/node --save-dev
   ```
3. Create a `server.ts` file:
   ```ts
   import http from 'http';
   const server = http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello, TypeScript with Node.js!');
   });
   server.listen(3000, () => console.log('Server running on port 3000'));
   ```
4. Run the server:
   ```sh
   npx ts-node server.ts
   ```

## TypeScript Best Practices
- Use interfaces and types instead of `any`.
- Enable strict mode in `tsconfig.json` (`"strict": true`).
- Use type inference to minimize redundant type annotations.
- Organize code into modules for better maintainability.
- Use generics to write reusable and type-safe functions.
- Prefer `readonly` for immutable properties.

## Conclusion
TypeScript enhances JavaScript with static typing, interfaces, and better tooling support. It is widely used in modern web development, especially with frameworks like React and Angular, and in backend development with Node.js. By following best practices and leveraging its advanced features, you can build scalable, maintainable, and bug-free applications.

---
This tutorial provides a comprehensive introduction to TypeScript, covering its basics, advanced features, integrations, and best practices. Happy coding!
