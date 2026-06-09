const inputs = document.querySelectorAll<HTMLInputElement>("input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const value: number = Number(input.value);

    // попередні
    for (let i = index - 1; i >= 0; i--) {
      inputs[i].value = String(Number(inputs[i + 1].value) - 1);
    }

    // наступні
    for (let i = index + 1; i < inputs.length; i++) {
      inputs[i].value = String(Number(inputs[i - 1].value) + 1);
    }
  });
});
