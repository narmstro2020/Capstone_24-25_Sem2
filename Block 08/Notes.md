
# JavaScript Error Handling and Debugging Tutorial

## Introduction
Error handling and debugging are crucial skills for any JavaScript developer. This tutorial will guide you through error handling concepts, vocabulary, practical examples, and debugging techniques. By the end, you'll be able to write robust code and efficiently troubleshoot issues.

---

## Vocabulary
- **Error**: An object representing a runtime issue.
- **Exception**: An unexpected or anomalous condition that disrupts normal program flow.
- **Try-Catch-Finally**: A block structure for handling errors.
- **Throw**: A statement to manually raise an error.
- **Console**: A developer tool for logging messages and inspecting issues.
- **Stack Trace**: A list showing the sequence of function calls leading to an error.
- **Debugger**: A tool for inspecting and manipulating the runtime behavior of a script.
- **Breakpoint**: A deliberate stopping point or pause in a script for debugging.

---

## Sections

### 1. Try-Catch-Finally

**Explanation**:
The `try` block allows you to test a block of code for errors. The `catch` block lets you handle those errors. The `finally` block contains code that will execute regardless of the try-catch result.

**Syntax**:
```javascript
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Execute cleanup code
}
```

**Example**:
```javascript
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error);
} finally {
    console.log("Execution completed.");
}
```

---

### 2. Throwing Errors

**Explanation**:
Use the `throw` statement to create a custom error.

**Syntax**:
```javascript
throw new Error("Custom error message");
```

**Example**:
```javascript
function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Valid age.";
}

try {
    console.log(validateAge(16));
} catch (error) {
    console.error(error.message);
}
```

---

### 3. Console Methods

**Explanation**: The `console` object provides various methods for debugging.

**Common Methods**:
- `console.log()`: Log information.
- `console.error()`: Log errors.
- `console.warn()`: Log warnings.
- `console.table()`: Display data as a table.
- `console.trace()`: Print a stack trace.

**Example**:
```javascript
console.log("Info message");
console.warn("Warning message");
console.error("Error message");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
console.trace("Trace point");
```

---

### 4. Debugging with Developer Tools

#### Chrome
1. Open Developer Tools (`Ctrl+Shift+I` or `Cmd+Option+I`).
2. Go to the "Sources" tab.
3. Set breakpoints by clicking on the line numbers in your code.
4. Inspect variables and call stack in the debugger.

#### Firefox
1. Open Developer Tools (`Ctrl+Shift+I` or `Cmd+Option+I`).
2. Use the "Debugger" tab.
3. Add breakpoints and use tools like "Watch Expressions" to inspect values.

**Example**:
```javascript
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5));
```
1. Set a breakpoint at `return number * number;`.
2. Inspect the `number` variable in the debugger.

---
