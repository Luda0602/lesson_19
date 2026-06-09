"use strict";
//Дано 5 елементів input.
//При введенні числа в будь-який input усі попередні поля повинні заповнюватися числами, які на 2 менші за наступне.
// const inputs = document.querySelectorAll("input");

// inputs.forEach((input, index) => {
//   input.addEventListener("input", () => {
//     for (let i = index + 1; i < inputs.length; i++) {
//       inputs[i].value = String(Number(inputs[i - 1].value) + 2);
//     }
//   });
// });

const inputs = document.querySelectorAll("input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    for (let i = index - 1; i >= 0; i--) {
      inputs[i].value = String(Number(inputs[i + 1].value) - 2);
    }
  });
});

//# sourceMappingURL=task-3.js.map
