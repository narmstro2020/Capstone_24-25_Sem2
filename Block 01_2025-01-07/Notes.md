
# Vanilla JavaScript To-Do App Tutorial

This tutorial will guide you through building a simple To-Do List application using Vanilla JavaScript, HTML, and CSS. The app demonstrates basic principles such as DOM manipulation, event handling, and state management.

---

## Folder Structure
```
/todo-app
  |-- index.html
  |-- styles.css
  |-- script.js
```

---

## `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS To-Do App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Vanilla JS To-Do App</h1>
    <div class="todo-input">
      <input type="text" id="task-input" placeholder="Add a new task">
      <button id="add-task-btn">Add Task</button>
    </div>
    <ul id="task-list"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

## `styles.css`
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
}

h1 {
  font-size: 24px;
  text-align: center;
}

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#task-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#add-task-btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

#add-task-btn:hover {
  background-color: #0056b3;
}

#task-list {
  list-style: none;
  padding: 0;
}

#task-list li {
  background: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#task-list li button {
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

#task-list li button:hover {
  background: #cc0000;
}
```

---

## `script.js`
```javascript
// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}

// Event listener for "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add tasks
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
```

---

## Key Features Demonstrated
1. **HTML Structure**: The layout of the app, including input, button, and task list.
2. **CSS Styling**: Basic design with flexbox, hover effects, and responsiveness.
3. **JavaScript Principles**:
    - **Event Handling**: Button click and keypress events.
    - **DOM Manipulation**: Dynamically creating, appending, and removing tasks.
    - **State Management**: Keeping tasks in the DOM (basic example).

---

This simple app serves as a foundation for understanding the basic principles of vanilla JavaScript web development!
