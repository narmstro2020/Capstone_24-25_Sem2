# HTML Forms Tutorial

## 1. Introduction to HTML Forms

### Vocabulary
| Term | Definition |
|------|------------|
| Form | An HTML element that collects user input. |
| Input | An HTML element used to enter data. |
| Label | An HTML element that describes an input field. |
| Submit Button | A button that submits the form data. |
| Action | An attribute that specifies where to send form data. |
| Method | An attribute that specifies how to send form data. |

### Description
HTML forms are used to collect input from users and send it to a server for processing. A form typically contains input fields, labels, and buttons.

### Example Code
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic Form</title>
</head>
<body>
    <form action="submit.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```
#### Output
A text field and a submit button.

## 2. Form Elements

### Vocabulary
| Term | Definition |
|------|------------|
| Text Input | A single-line input field. |
| Password Input | A field that hides user input. |
| Radio Button | A circular selection input. |
| Checkbox | A box that can be checked. |
| Select Dropdown | A drop-down menu. |

### Description
Forms can include various input elements to collect different types of user data.

### Example Code
```html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br>
    
    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <br>
    
    <label>Subscribe to newsletter:</label>
    <input type="checkbox" name="subscribe"><br>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="us">USA</option>
        <option value="uk">UK</option>
    </select>
    <br>
    <input type="submit" value="Submit">
</form>
```
#### Output
A form with email, password, radio buttons, a checkbox, and a dropdown.

## 3. Form Validation with JavaScript

### Vocabulary
| Term | Definition |
|------|------------|
| Validation | Checking user input before submitting the form. |
| Required | Ensures a field is not empty. |
| Regex | A pattern used for validation. |
| Event Listener | Detects user actions in JavaScript. |

### Description
Form validation ensures that users provide correct input before submission.

### Example Code
```html
<form onsubmit="return validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <span id="error"></span>
    <br>
    <input type="submit" value="Submit">
</form>

<script>
function validateForm() {
    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("error").innerText = "Username is required";
        return false;
    }
    return true;
}
</script>
```
#### Output
An error message appears if the field is empty.

## 4. Styling Forms with CSS

### Vocabulary
| Term | Definition |
|------|------------|
| Padding | Space inside an element’s border. |
| Margin | Space outside an element’s border. |
| Border | The outline of an element. |
| Placeholder | A hint inside an input field. |

### Description
CSS enhances form appearance for better usability.

### Example Code
```html
<style>
    input {
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
    input:focus {
        border-color: blue;
    }
</style>
<form>
    <input type="text" placeholder="Enter your name">
</form>
```
#### Output
Styled input fields with focus effects.

## More Examples


### Example 1: Create a Survey Form
Create a survey form with text inputs, radio buttons, checkboxes, and a submit button. Validate that all required fields are filled.

### Example 2: Enhance Form with CSS
Style a form to have rounded input fields, a colored submit button, and spacing between elements.

## Solutions

### Example 1: Solution: Survey Form
```html
<form>
    <label>Name:</label>
    <input type="text" required>
    <br>
    <label>Age:</label>
    <input type="number" required>
    <br>
    <label>Favorite Color:</label>
    <input type="text">
    <br>
    <label>Subscribe:</label>
    <input type="checkbox">
    <br>
    <input type="submit" value="Submit">
</form>
```

### Example 2: Solution: Enhanced CSS Form
```html
<style>
    input {
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
    }
    input[type="submit"] {
        background-color: blue;
        color: white;
    }
</style>
<form>
    <input type="text" placeholder="Enter Name">
    <input type="submit" value="Submit">
</form>
```
