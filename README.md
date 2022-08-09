# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![mobile design](./design/mobile-design.jpg)
![desktop design](./design/desktop-design.jpg)

### Links

- Solution URL: [view solution here](https://www.frontendmentor.io/solutions/responsive-expenses-chart-component-solution-using-html-css-and-js-SKrRkxq-u3)
- Live Site URL: [view live](https://damola-147.github.io/Expenses-chart-component-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Async and Await/ Fetch
- JSON file


### What I learned

This challenge gave me the opportunity to practice `Fetch`, 
`Await` and Asynchronous javaScript. I am proud of my solution
to this challenge which initially seemed quite difficult at the thought of building something quite complex. At the end, it has helped in building my confidence with JavaScript and CSS. 

Proud of how I used the JSON data file to dynamically size the
bars on the chart. Proud of how neat and consise my JavaScript
code is.

Proud of this code:


```js
async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();

    displayBarCharts(data);
```


### Continued development

I want to focus more on these areas in future projects; to refine and perfect these areas and feel more comfortable working with them.

- Promises, Async JS
- Naming Functions correctly
- Writing pure, succinct functions (Breaking down functions)
- Classes in JS


## Author

- Frontend Mentor - [@Damola-147](https://www.frontendmentor.io/profile/Damola-147)
- Twitter - [@adebiyi_stoke](https://www.twitter.com/adebiyi_stoke)


## Acknowledgments

- Frontend Mentor: for the initiative and making such wonderful projects available for free.
- My sister, Oyinloluwa: for her support during this project :)
