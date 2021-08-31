# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- Overview
  - [Screenshot](#screenshot)
- My process
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### Screenshot

![](./images/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

1. Google Font

```css
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap");
```

2. Reactive Web Foundation

```css
body {
  background-image: url(./images/pattern-background-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(225, 100%, 94%);
  font-size: 16px;
  font-family: "Red Hat Display", sans-serif;
  width: 100%;
}

@media (max-width: 375px) {
  body {
    background-color: hsl(225, 100%, 94%);
    background-image: none;
  }
}
```

3. Grid

```css
.ar-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-items: center;
  height: 75px;
  background-color: hsl(225, 100%, 98%);
  border-radius: 10px;
}
```
