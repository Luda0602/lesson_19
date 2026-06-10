"use strict";

function initDivClicks(selector: string) {
  const divList = document.querySelectorAll<HTMLDivElement>(selector);

  divList.forEach((div, index) => {
    div.addEventListener("click", () => {
      for (let i = index + 1; i < divList.length; i++) {
        divList[i].style.color = "red";
      }
    });
  });
}

initDivClicks("div");
