# JavaScript Tutorial: Modern Features and Experimental Additions

## 1. Optional Chaining and Nullish Coalescing

### Vocabulary
| Term | Definition |
|------|------------|
| Optional Chaining (`?.`) | A feature that allows safe access to deeply nested object properties without throwing an error if an intermediate property is `null` or `undefined`. |
| Nullish Coalescing (`??`) | A logical operator that returns the right-hand operand when the left-hand operand is `null` or `undefined`. |

### Description
Optional chaining (`?.`) simplifies accessing deeply nested properties by returning `undefined` instead of throwing an error when encountering `null` or `undefined`.

Nullish coalescing (`??`) provides a more reliable fallback than `||`, as it only considers `null` and `undefined` as falsy, ignoring other falsey values like `0`, `''`, or `false`.

### Example Code
```javascript
const user = {
    profile: {
        name: "Alice",
        age: 25
    }
};

console.log(user?.profile?.name); // "Alice"
console.log(user?.address?.city); // undefined (no error)

const input = null;
const defaultValue = input ?? "Default Value";
console.log(defaultValue); // "Default Value"
```

---

## 2. Top-Level Await

### Vocabulary
| Term | Definition |
|------|------------|
| Top-Level Await | Allows `await` to be used at the top level of a module without needing an async function. |
| ECMAScript Modules (ESM) | JavaScript modules that support `import` and `export`. |

### Description
Traditionally, `await` could only be used inside `async` functions. With Top-Level Await, it is now possible to use `await` directly within ES modules, making it easier to handle asynchronous initialization.

### Example Code
```javascript
// dataFetcher.mjs
export const data = await fetch("https://api.example.com/data").then(res => res.json());
```
```javascript
// main.mjs
import { data } from "./dataFetcher.mjs";
console.log(data);
```

---

## 3. Temporal API (Proposal)

### Vocabulary
| Term | Definition |
|------|------------|
| Temporal API | A new proposal to replace the built-in `Date` object with a more robust and flexible API. |
| Instant | Represents an exact moment in time. |
| ZonedDateTime | Represents a date and time with a time zone. |
| PlainDate | Represents a calendar date without time. |

### Description
The Temporal API is an upcoming replacement for the `Date` object, addressing its many limitations, such as incorrect timezone handling and lack of precision.

### Example Code
```javascript
const now = Temporal.Now.instant();
console.log(now.toString()); // "2025-02-06T12:30:45.123Z"

const zonedDate = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(zonedDate.toString()); // "2025-02-06T07:30:45.123-05:00[America/New_York]"
```

---

## 4. Pattern Matching (Proposal)

### Vocabulary
| Term | Definition |
|------|------------|
| Pattern Matching | A proposed feature for JavaScript that enables concise and readable conditional checks based on object structures. |
| Structural Matching | Checking values based on shape rather than exact values. |

### Description
Pattern matching is a proposed feature that allows for more expressive and readable conditional statements by matching object structures.

### Example Code (Proposed Syntax)
```javascript
switch (data) {
    case { type: "user", name: let name }:
        console.log(`User Name: ${name}`);
        break;
    case { type: "admin", permissions: let perms }:
        console.log(`Admin Permissions: ${perms}`);
        break;
    default:
        console.log("Unknown Type");
}
```

---

## 5. WeakRefs and FinalizationRegistry

### Vocabulary
| Term | Definition |
|------|------------|
| WeakRefs | Weak references to objects that allow garbage collection when no other references exist. |
| FinalizationRegistry | A way to schedule cleanup logic when an object is garbage collected. |

### Description
WeakRefs and FinalizationRegistry allow better memory management by tracking objects without preventing garbage collection.

### Example Code
```javascript
let obj = { data: "important data" };
const weakRef = new WeakRef(obj);

console.log(weakRef.deref()?.data); // "important data"
obj = null; // Allow garbage collection

const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with ${heldValue} has been collected`);
});
registry.register(obj, "metadata");
```

---