задание 1
let first = document.querySelector("#first");
let parent = first.parentElement;
console.log(parent);
console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(first.nextElementSibling);


задание 2
let link = document.getElementById("link");
let currentHref = link.getAttribute("href");
console.log("1. Текущая ссылка (получили):", currentHref);
link.setAttribute("href", "https://yandex.ru");
console.log("2. Новая ссылка (изменили):", link.getAttribute("href"));
let hasTarget = link.hasAttribute("target");
console.log("3. Есть ли атрибут target? (проверили):", hasTarget);
link.removeAttribute("href");
console.log("4. Атрибут href после удаления:", link.getAttribute("href"));
let third = document.querySelector("#third");
console.log(third.previousElementSibling);
let link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://example.com");
console.log(link.hasAttribute("href"));
link.removeAttribute("target");


задание 3
let input = document.getElementById("username");
let resultParagraph = document.getElementById("result");
console.log("Было введено:", input.value);
input.value = "Отличник";
resultParagraph.textContent = "Результат: " + input.value;
