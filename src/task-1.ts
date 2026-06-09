const divList = document.querySelectorAll<HTMLDivElement>("div");

divList.forEach((div, index) => {
  div.addEventListener("click", () => {
    for (let i = index + 1; i < divList.length; i++) {
      divList[i].style.color = "red";
    }
  });
});
