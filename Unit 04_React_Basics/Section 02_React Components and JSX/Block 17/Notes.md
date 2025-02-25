
# React with JSX Tutorial using Vite (Sections 1–4)

## 1. Introduction to React and JSX

### Vocabulary

| Term        | Definition |
|-------------|------------|
| **React**   | A JavaScript library for building user interfaces, developed by Facebook. |
| **JSX**     | JavaScript XML, a syntax extension that allows mixing HTML-like syntax with JavaScript code. |
| **Component** | A reusable, self-contained piece of UI that can be nested, managed, and reused across an app. |

### Description

React is a powerful library used to create dynamic, interactive user interfaces for web applications. It breaks the UI into **components**—small, reusable code snippets responsible for rendering parts of the UI.

JSX allows developers to write HTML-like code directly within JavaScript, making it easier to visualize the UI structure and bind dynamic data.

### Example Code

```jsx
// App.jsx
import 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app using Vite and JSX.</p>
    </div>
  );
};

export default App;
```

### Explanation

- `import React from 'react';` → Imports the React library.
- `App` → A functional component written with an **arrow function**.
- JSX syntax is used to return HTML-like elements.

---

## 2. Setting Up the Project with Vite

### Vocabulary

| Term            | Definition |
|-----------------|------------|
| **Vite**        | A build tool that provides a faster development experience for modern web projects. |
| **Fast Refresh**| React’s feature for preserving state while editing during development. |
| **Build Tool**  | A utility that bundles and processes files for optimized production deployment. |

### Description

**Vite** is a build tool optimized for speed and developer productivity. Unlike traditional bundlers (like Webpack), Vite uses native ES modules in the browser and builds your project only when necessary.

### Steps to Set Up a React App Using Vite

1. **Create a new project:**

```bash
npm create vite@latest react-vite-app -- --template react
cd react-vite-app
npm install
```

2. **Project Structure:**

- `src/main.jsx` → Entry point of the React app.
- `src/App.jsx` → Main component.
- `vite.config.js` → Configuration for Vite.

### Example Code (Vite Config File)

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```
---

## 3. Creating Functional Components with Arrow Functions

### Vocabulary

| Term                | Definition |
|---------------------|------------|
| **Functional Component** | A JavaScript function that returns JSX and renders part of the UI. |
| **Arrow Function**   | A concise syntax for writing functions in JavaScript. |
| **Props**            | Short for "properties", props allow data to be passed from a parent to a child component. |

### Description

Functional components are the standard way to define React components. They are easier to write and test than class-based components. Using **arrow functions** simplifies function syntax and avoids binding issues.

### Example Code

```jsx
// Button.jsx
import 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
```
---

## 4. JSX Syntax and Rules

### Vocabulary

| Term                  | Definition |
|-----------------------|------------|
| **JSX**               | Syntax extension that allows embedding HTML in JavaScript. |
| **Expression**        | A unit of code that returns a value. |
| **Curly Braces `{}`** | Used to embed JavaScript expressions in JSX. |

### Description

JSX allows writing elements in a familiar HTML-like syntax directly within JavaScript. However, JSX has some specific rules:

1. **Return one root element** → Wrap multiple elements in a parent tag.
2. **Use camelCase for attributes** → Example: `className` instead of `class`.
3. **JavaScript expressions inside curly braces `{}`** → Embed variables or logic.

### Example Code

```jsx
const App = () => {
  const userName = "Jane";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome {isLoggedIn ? userName : "Guest"}!</h1>
      <p>{isLoggedIn && "Glad to see you back!"}</p>
    </div>
  );
};
```


