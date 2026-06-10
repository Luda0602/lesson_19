"use strict";
function initDivClicks(selector) {
    const divList = document.querySelectorAll(selector);
    divList.forEach((div, index) => {
        div.addEventListener("click", () => {
            for (let i = index + 1; i < divList.length; i++) {
                divList[i].style.color = "red";
            }
        });
    });
}
initDivClicks("div");
//# sourceMappingURL=task-1.js.map