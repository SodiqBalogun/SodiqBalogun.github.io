// window.onscroll = function() {myFunction()};
// let header = document.getElementById("header");
//
// let placeholder = document.createElement("div");
// placeholder.classList.add("placeholder");
// header.parentNode.insertBefore(placeholder, header);
//
// let sticky = header.offsetTop;
//
// function myFunction() {
//     if (window.scrollY > sticky) {
//         header.classList.add("sticky");
//         placeholder.style.height = `${header.offsetHeight}px`;
//     } else {
//         header.classList.remove("sticky");
//         placeholder.style.height = "0";
//     }
// }
//

window.addEventListener("scroll", myFunction);
window.addEventListener("resize", updateSticky);

let header = document.getElementById("header");
let placeholder = document.createElement("div");
placeholder.classList.add("placeholder");
header.parentNode.insertBefore(placeholder, header);
let sticky = header.offsetTop;

function updateSticky() {
    sticky = header.offsetTop;
    placeholder.style.height = `${header.offsetHeight}px`;
}

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
        placeholder.style.display = "block";
    } else {
        header.classList.remove("sticky");
        placeholder.style.display = "none";
    }
}

// Initial setup
updateSticky();
sticky = header.offsetTop;
placeholder.style.height = `${header.offsetHeight}px`;

// Scrolling page
function scrollToElement(pageElement) {
    document.getElementById(`${pageElement}`).scrollIntoView({
        behavior: "smooth"
    });
}

// Scrolling Coffee
const coffeeArr = ["Latte", "Cappuccino", "Cortado", "Mocha", "Drip Coffee", "Red Eye", "Cafe Au Lait", "Americano"];
let current = document.getElementById("content");
let currentIndex = 0;
let leftIndex = coffeeArr.length - 1;
let rightIndex = 1;
let leftButton = document.getElementById("slideLeft");
let rightButton = document.getElementById("slideRight");
current.innerHTML = coffeeArr[currentIndex];
leftButton.innerHTML = coffeeArr[leftIndex];
rightButton.innerHTML = coffeeArr[rightIndex];

function scrollCoffeesRight() {
    if (currentIndex !== coffeeArr.length - 1) {
        currentIndex++;
        if (leftIndex === coffeeArr.length - 1) {
            leftIndex = 0;
        } else {
            leftIndex++;
        }
        if (rightIndex === coffeeArr.length - 1) {
            rightIndex = 0;
        } else {
            rightIndex++;
        }
        current.innerHTML = coffeeArr[currentIndex];
        leftButton.innerHTML = coffeeArr[leftIndex];
        rightButton.innerHTML = coffeeArr[rightIndex];
    }
    if (currentIndex === coffeeArr.length - 1) {
        current.innerHTML = coffeeArr[currentIndex];
        leftButton.innerHTML = coffeeArr[leftIndex];
        rightButton.innerHTML = coffeeArr[rightIndex];
        currentIndex = 0;
        leftIndex = coffeeArr.length - 1;
        rightIndex = 1;
    }
}