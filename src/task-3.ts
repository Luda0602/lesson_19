"use strict";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createLists(countLists: number) {
  for (let i = 0; i < countLists; i++) {
    const ol = document.createElement("ol");

    const itemsCount = getRandomNumber(1, 10);

    for (let j = 0; j < itemsCount; j++) {
      const li = document.createElement("li");

      li.innerText = String(getRandomNumber(1, 100));

      ol.append(li);
    }

    document.body.append(ol);
  }
}

function initButton(buttonSelector: string, listSelector: string) {
  const button = document.querySelector<HTMLButtonElement>(buttonSelector);

  button?.addEventListener("click", () => {
    const lists = document.querySelectorAll<HTMLOListElement>(listSelector);

    lists.forEach((list) => {
      const count = list.children.length;

      if (count % 2 === 0) {
        list.style.color = "green";
      } else {
        list.style.color = "red";
      }
    });
  });
}

createLists(5);
initButton("#btn", "ol");
