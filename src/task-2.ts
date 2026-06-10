"use strict";

function initInputs(selector: string) {
  const inputs = document.querySelectorAll<HTMLInputElement>(selector);

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      for (let i = index - 1; i >= 0; i--) {
        inputs[i].value = String(Number(inputs[i + 1].value) - 1);
      }

      for (let i = index + 1; i < inputs.length; i++) {
        inputs[i].value = String(Number(inputs[i - 1].value) + 1);
      }
    });
  });
}

initInputs("input");
