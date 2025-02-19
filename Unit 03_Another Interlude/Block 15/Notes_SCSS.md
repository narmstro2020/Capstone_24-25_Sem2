# SCSS Tutorial

## 1. Introduction to SCSS

### 1.1 What is SCSS?
SCSS (Sassy CSS) is a CSS preprocessor that extends CSS with additional features like variables, nesting, mixins, and functions. It helps in writing maintainable and reusable stylesheets.

### 1.2 SCSS vs. CSS
- **CSS**: Plain styling language.
- **SCSS**: Adds programming-like features, making CSS more efficient.

Example:
```scss
$primary-color: #3498db;
body {
  background: $primary-color;
}
```

### 1.3 Why Use SCSS?
- **Improves maintainability**
- **Reduces redundancy**
- **Supports modularization**
- **Enhances readability**

### 1.4 How to Install SCSS
You need Node.js installed. Then, install Sass via npm:
```sh
npm install -g sass
```

### 1.5 Compiling SCSS to CSS
Use the following command:
```sh
sass input.scss output.css
```

### 1.6 SCSS File Structure
Organizing SCSS files properly ensures better maintainability. Example structure:
```
styles/
  ├── main.scss
  ├── _variables.scss
  ├── _mixins.scss
  ├── _components.scss
```

### 1.7 Setting Up a SCSS Project
1. Install Node.js and Sass.
2. Create a `styles` folder.
3. Write SCSS files.
4. Compile SCSS into CSS.

## 2. SCSS Syntax and Basics

### 2.1 SCSS Syntax Overview
SCSS follows a CSS-like syntax but with added features:
```scss
$font-stack: Helvetica, sans-serif;
body {
  font-family: $font-stack;
}
```

### 2.2 Variables (`$`)
Variables store values for reuse:
```scss
$main-color: #ff5733;
p {
  color: $main-color;
}
```

### 2.3 Nesting
SCSS allows nesting selectors inside others:
```scss
nav {
  ul {
    list-style: none;
  }
}
```

### 2.4 Partials and Importing (`@import`)
SCSS files starting with `_` are partials that can be imported:
```scss
@import 'variables';
```

### 2.5 Modules (`@use` and `@forward`)
Use `@use` to import SCSS modules and `@forward` to re-export styles:
```scss
@use 'variables' as *;
```

### 2.6 Comments (`//` vs. `/* */`)
- `//` for single-line comments
- `/* */` for multi-line comments

## 3. Advanced SCSS Features

### 3.1 Mixins (`@mixin` and `@include`)
Define reusable styles:
```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}
button {
  @include border-radius(5px);
}
```

### 3.2 Functions (`@function`)
Create custom SCSS functions:
```scss
@function double($number) {
  @return $number * 2;
}
div {
  width: double(10px);
}
```

### 3.3 Extending Styles (`@extend`)
Extend styles from another selector:
```scss
%button-style {
  display: inline-block;
}
.button {
  @extend %button-style;
}
```

### 3.4 Operators (`+`, `-`, `*`, `/`, `%`)
Perform calculations in SCSS:
```scss
width: (100% / 3);
```

### 3.5 Control Directives (`@if`, `@else`, `@for`, `@each`, `@while`)
Use logic in SCSS:
```scss
@if $theme == dark {
  body {
    background: black;
  }
}
```

## 4. Using SCSS for Real-World Projects

### 4.1 Structuring SCSS Files (7-1 Pattern)
A common SCSS file structure:
```
scss/
  ├── abstracts/
  ├── base/
  ├── components/
  ├── layout/
  ├── pages/
  ├── themes/
  ├── vendors/
```

### 4.2 Creating a SCSS Utility Framework
Using mixins and functions to create utility classes.

### 4.3 Theming with SCSS
Use variables and mixins to create light/dark themes.

### 4.4 Responsive Design with SCSS
Use media queries inside mixins.
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == small {
    @media (max-width: 600px) {
      @content;
    }
  }
}
```

## 5. SCSS Performance and Best Practices

### 5.1 Optimizing SCSS Code
- Use minimal nesting
- Avoid deep nesting
- Use variables and mixins efficiently

### 5.2 Reducing Compilation Time
Avoid unnecessary `@extend` and large `@import` files.

## 6. SCSS Integration with JavaScript and Frontend Frameworks

### 6.1 SCSS in React
Use SCSS modules:
```scss
import styles from './styles.module.scss';
```

### 6.2 SCSS in Vue.js
Vue components with SCSS:
```scss
<style lang="scss">
</style>
```

### 6.3 SCSS in Angular
Use SCSS in Angular components:
```scss
@Component({
  styleUrls: ['./styles.scss']
})
```

This tutorial covers SCSS from basic to advanced levels with assignments and best practices for real-world development.
