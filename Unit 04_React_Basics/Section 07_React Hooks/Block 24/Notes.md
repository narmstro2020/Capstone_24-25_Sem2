# Complete Guide to Built-in React Hooks

React provides several built-in hooks that allow developers to use state, lifecycle methods, and other React features without writing a class. These hooks make function components more powerful and flexible.

---
## 1. `useState`
`useState` allows functional components to manage state.

### Syntax:
```jsx
const [state, setState] = useState(initialValue);
```

### Example: Counter
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
**Explanation:**
- `count` is the state variable.
- `setCount` updates the state.
- `useState(0)` initializes `count` to `0`.

---
## 2. `useEffect`
`useEffect` allows side effects (e.g., fetching data, updating the DOM, timers) in functional components.

### Syntax:
```jsx
useEffect(() => {
  // Side effect logic
}, [dependencies]);
```

### Example: Fetching Data
```jsx
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.slice(0, 5).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;
```
**Explanation:**
- `useEffect` runs once when the component mounts (`[]` as the dependency array).
- It fetches data and updates the state.

---
## 3. `useContext`
`useContext` allows consuming values from `React.Context` without using `<Consumer>`.

### Syntax:
```jsx
const value = useContext(MyContext);
```

### Example: Theme Context
```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;
```
**Explanation:**
- `useContext(ThemeContext)` allows access to the `ThemeContext` value.

---
## 4. `useRef`
`useRef` creates a mutable reference to an element or value that persists across renders.

### Syntax:
```jsx
const ref = useRef(initialValue);
```

### Example: Managing Focus
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```
**Explanation:**
- `useRef` stores a reference to the input field.
- `inputRef.current.focus()` sets focus on the input.

---
## 5. `useReducer`
`useReducer` is an alternative to `useState`, useful for managing complex state logic.

### Syntax:
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Example: Counter with Reducer
```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
```
**Explanation:**
- `reducer` function manages state transitions.
- `dispatch` triggers state updates.

---
## 6. `useMemo`
`useMemo` memoizes expensive computations to optimize performance.

### Syntax:
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(), [dependencies]);
```

### Example: Expensive Calculation
```jsx
import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return <p>Squared: {squared}</p>;
}

export default ExpensiveCalculation;
```
**Explanation:**
- `useMemo` recalculates `squared` only when `num` changes.

---
## 7. `useCallback`
`useCallback` memoizes functions to prevent unnecessary re-renders.

### Syntax:
```jsx
const memoizedCallback = useCallback(() => { /* function logic */ }, [dependencies]);
```

### Example: Avoiding Unnecessary Re-renders
```jsx
import { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
```
**Explanation:**
- `useCallback` memoizes `handleClick`, preventing unnecessary re-renders.

---

## **Conclusion**
React hooks simplify component logic and improve code reusability. Choosing the right hook depends on the use case, such as state management (`useState`, `useReducer`), performance optimizations (`useMemo`, `useCallback`), or DOM interactions (`useRef`, `useLayoutEffect`).

