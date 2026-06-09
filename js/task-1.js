"use strict";
const divList = document.querySelectorAll("div");
divList.forEach((div, index) => {
    div.addEventListener("click", () => {
        for (let i = index + 1; i < divList.length; i++) {
            divList[i].style.color = "red";
        }
    });
});
//# sourceMappingURL=task-1.js.map