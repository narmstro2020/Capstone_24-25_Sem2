# HTML Form Submission and Processing with JavaScript, Node, and Express

## 1. Introduction
Forms are a fundamental part of web applications, allowing users to send data to a server. This tutorial covers how to handle form submission in HTML and process the data using JavaScript, Node.js, and Express.

---

## 2. Vocabulary

| Term | Definition |
|------|------------|
| **Form** | An HTML element used to collect user input and send it to a server. |
| **Input Field** | An HTML element that allows users to enter data. |
| **Submit Button** | A button used to send form data to the specified server endpoint. |
| **Client-Side Processing** | Handling form submission using JavaScript before sending data to the server. |
| **Server-Side Processing** | Handling and processing form data using a backend server like Node.js. |
| **Middleware** | Functions in Express.js that process requests before reaching the final handler. |
| **Body Parser** | Middleware that extracts the body portion of an incoming request for easy handling. |

---

## 3. Creating an HTML Form
An HTML form is defined using the `<form>` tag and contains various input fields.

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <h2>Contact Form</h2>
    <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <button type="submit">Submit</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

---

## 4. Handling Form Submission with JavaScript (Client-Side)

### Example
```javascript
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };
    
    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert("Server Response: " + data.message))
    .catch(error => console.error("Error:", error));
});
```

### Expected Output (in alert box)
```
Server Response: Form submitted successfully!
```

---

## 5. Setting Up a Node.js Server with Express (Server-Side)

### Install Dependencies
```sh
npm init -y
npm install express body-parser cors
```

### Example: Express Server
```javascript
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
    console.log("Received Data:", req.body);
    res.json({ message: "Form submitted successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Expected Output (Terminal Log)
```
Received Data: { name: 'John Doe', email: 'johndoe@example.com' }
```

---

## 6. More Examples

### **More Examples 1: Add More Fields**
Modify the form to include a phone number field and process it on both client-side and server-side.

### **More Examples 2: Validate Input Fields**
Ensure that the name field contains only letters and that the email is in a valid format using JavaScript before submission.

---

## 7. More Examples Solutions

### **Solution for More Examples 1**
Add an input field for the phone number in `index.html`:
```html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" required>
```

Modify `script.js`:
```javascript
let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
};
```

Modify `server.js`:
```javascript
app.post("/submit", (req, res) => {
    console.log("Received Data:", req.body);
    res.json({ message: "Form submitted successfully!" });
});
```

### **Solution for More Examples 2**
Modify `script.js`:
```javascript
let nameRegex = /^[a-zA-Z ]+$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!nameRegex.test(formData.name)) {
    alert("Invalid Name");
    return;
}
if (!emailRegex.test(formData.email)) {
    alert("Invalid Email");
    return;
}
```

---

## 8. Conclusion
This tutorial covered HTML form submission, client-side validation, and server-side processing using Node.js and Express. With these skills, you can build more advanced web applications handling user inputs effectively.
