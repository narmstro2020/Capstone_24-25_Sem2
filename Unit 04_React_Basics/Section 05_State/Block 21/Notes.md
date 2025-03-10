# React Adding Interactivity Tutorial

## Table of Contents
1. [Responding to Events](https://react.dev/learn/responding-to-events)
2. [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
3. [Render and Commit](https://react.dev/learn/render-and-commit)
4. [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
5. [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
6. [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
7. [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)

---

## 1. Responding to Events

### Vocabulary
| Term | Definition |
|------|------------|
| Event Handling | The process of responding to user actions, such as clicks or keystrokes. |
| Synthetic Event | A wrapper around the native browser event to provide consistent behavior across browsers. |
| onClick | A React event handler used to detect click events. |

### Description
React handles events similarly to the DOM but with a few key differences:
- Event names are written in camelCase (e.g., `onClick` instead of `onclick`).
- Functions are used as event handlers rather than strings.
- The event parameter is a SyntheticEvent, which normalizes event properties.

### Example Code
```jsx
import { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}
```

---

## 2. State: A Component's Memory

### Vocabulary
| Term | Definition |
|------|------------|
| State | A component’s memory, allowing it to store values between renders. |
| useState | A React Hook used to add state to functional components. |

### Description
State allows components to remember and update values over time. The `useState` hook is used to declare state variables.

### Example Code
```jsx
import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState('');

  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  );
}
```

---

## 3. Render and Commit

### Vocabulary
| Term | Definition |
|------|------------|
| Render | The process of React calling a component to generate UI elements. |
| Commit | The process of React applying changes to the DOM. |

### Description
React first renders components in memory and then commits the changes to the DOM. Rendering is pure and does not modify state.

### Example Code
```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
```

---

## 4. State as a Snapshot

### Description
State updates asynchronously, meaning the current state is a snapshot of the state at the time of render.

### Example Code
```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>Count: {count}</button>
  );
}
```

---

## 5. Queueing a Series of State Updates

### Example Code
```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  return (
    <button onClick={increment}>Count: {count}</button>
  );
}
```

---

## 6. Updating Objects in State

### Example Code
```jsx
import { useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  function increaseAge() {
    setUser({ ...user, age: user.age + 1 });
  }

  return (
    <button onClick={increaseAge}>{user.name} is {user.age} years old</button>
  );
}
```

---

## 7. Updating Arrays in State

### Example Code
```jsx
import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  }

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  );
}
```

---