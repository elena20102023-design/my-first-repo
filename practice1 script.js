console.log(window);
console.log(document);
console.log(navigator);
console.log(location.href);
alert("Добро пожаловать!");
let name = prompt("Как вас зовут?");
console.log("Имя пользователя: " + name);
let title = document.getElementById("title");
console.log(title);
let paragraph = document.querySelector(".text");
console.log(paragraph);


let mainTitle = document.getElementById("main-title");
console.log("1. Поиск по ID:", mainTitle);
let descriptions = document.getElementsByClassName("description");
console.log("2. Поиск по классу:", descriptions);
let paragraphs = document.getElementsByTagName("p");
console.log("3. Поиск по тегу p:", paragraphs);
let firstDescription = document.querySelector(".description");
console.log("4. Поиск по CSS-селектору (первый):", firstDescription);
let allListItems = document.querySelectorAll("ul li");
console.log("5. Поиск всех по CSS-селектору:", allListItems);
