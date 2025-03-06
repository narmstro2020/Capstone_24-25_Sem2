# React Rendering Concepts

[Learn React from react.dev](https://react.dev/learn/describing-the-ui)

[React Foundations from Next.js](https://nextjs.org/learn/react-foundations)

## 1. Conditional Rendering

### Vocabulary
| Term | Definition |
|------|------------|
| Conditional Rendering | The process of dynamically deciding which components or elements to render based on conditions. |
| Ternary Operator | A shorthand for conditional statements, often used in JSX. |
| Short-circuit Evaluation | A way to conditionally render elements using logical operators like `&&`. |
| Null Rendering | Rendering `null` to prevent a component from displaying anything. |

### Description
Conditional rendering in React allows components to render different outputs depending on conditions. This is essential for controlling UI elements dynamically.

#### Methods of Conditional Rendering

1. **Using `if` statements:**
2. **Using ternary operators (`? :`)**
3. **Using logical `&&` (short-circuiting)**
4. **Rendering `null` to prevent rendering**

### Example Code
```jsx
const Greeting = ({ isLoggedIn }) => {
   return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>;
};
```

```jsx
const AlertMessage = ({ showMessage }) => showMessage && <p>This is an alert!</p>;
```

## 2. Rendering Lists

### Vocabulary
| Term | Definition |
|------|------------|
| List Rendering | The process of iterating over an array to generate a list of elements. |
| `key` Prop | A special prop in React used to uniquely identify elements in a list. |
| `.map()` | A JavaScript method used to iterate over an array and transform each element. |

### Description
Rendering lists is essential when working with dynamic data. React uses the `.map()` function to transform arrays into lists of JSX elements. A unique `key` prop must be provided for each item to optimize rendering performance.

### Example Code
```jsx
const TodoList = ({ todos }) => {
   return (
           <ul>
              {todos.map(todo => (
                      <li key={todo.id}>{todo.text}</li>
              ))}
           </ul>
   );
};
```

## 3. Keeping Components Pure

### Vocabulary
| Term | Definition |
|------|------------|
| Pure Component | A component that returns the same output given the same props and state. |
| Side Effect | Any operation (such as modifying variables outside the function) that affects external state. |
| Referential Transparency | The principle that functions should depend only on their input parameters. |

### Description
Pure functions and components improve maintainability, reusability, and performance. React components should be kept pure by avoiding side effects inside render methods and using hooks (like `useEffect`) for effects.

### Example Code
```jsx
const FullName = ({ firstName, lastName }) => {
   return <h1>{`${firstName} ${lastName}`}</h1>;
};
```
This function is pure because it only depends on its input (`firstName`, `lastName`) and does not modify anything outside its scope.

## 4. Your UI as a Tree

### Vocabulary
| Term | Definition |
|------|------------|
| Component Tree | The hierarchical structure of React components representing the UI. |
| Parent Component | A component that contains other components (children). |
| Child Component | A component nested inside another component. |

### Description
React's component-based architecture creates a tree-like structure where each component is a node. Understanding this helps in designing reusable and scalable components.

### Example Code
```jsx
const App = () => {
   return (
           <div>
              <Header />
              <MainContent />
              <Footer />
           </div>
   );
};
```

---

# More Examples

### 1. Conditional Rendering Assignment
Create a `UserStatus` component that displays "Logged In" if the `isLoggedIn` prop is `true`, otherwise display "Logged Out".
```jsx
const UserStatus = ({ isLoggedIn }) => {
   return isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p>;
};
```

### 2. UI as a Tree Assignment
Design a simple UI component tree where `App` contains `Navbar`, `Sidebar`, and `Content` components.
```jsx
const Navbar = () => <nav>Navbar</nav>;
const Sidebar = () => <aside>Sidebar</aside>;
const Content = () => <main>Content</main>;

const App = () => {
   return (
           <div>
              <Navbar />
              <Sidebar />
              <Content />
           </div>
   );
};
```
---