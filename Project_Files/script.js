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
const coffeePriceArr = ["$4.75 (Hot) | $5.25 (Cold)", "$4.50 (Hot)", "$4.25 (Hot) | $4.75 (Cold)", "$5.75 (Hot) | $6.25 (Cold)",
    "Small: $3.00 (Hot) | $3.50 (Cold)" + "<br>" +"Medium: $3.50 (Hot)" + "<br>" +"Large: $4.00 (Hot) | $4.25 (Cold)", "$4.50 (Hot) | $4.75 (Cold)",
    "$3.25 (Hot)", "$3.75 (Hot) | $4.25 (Cold)"];
const coffeeImgArr = ["Images/SipNPlayLatteImage.webp", "Images/SipNPlayCappucino.jpeg", "Images/SipNPlayCortado.jpg",
    "Images/SipNPlayMochaImg.jpg", "Images/SipNPlayDripCoffee.webp", "Images/SipNPlayRedEyeCoffee.webp",
    "Images/SipNPlayCafeAuLait.jpg", "Images/SipNPlayAmericano2.webp"];
let current = document.getElementById("content");
let currentIndex = 0;
let currentCoffee = document.getElementById("currentCoffee");
let currentCoffeePrice = document.getElementById("currentCoffeeInfo");
let currentImg = document.getElementById("currentCoffeeImg");

let leftIndex = coffeeArr.length - 1;
let rightIndex = 1;
let leftButton = document.getElementById("slideLeft");
let rightButton = document.getElementById("slideRight");

let coffeeSelect = document.getElementById("content2");

current.innerHTML = coffeeArr[currentIndex];
currentCoffee.innerHTML = coffeeArr[currentIndex].toUpperCase();
currentCoffeePrice.innerHTML = coffeePriceArr[currentIndex];
currentImg.src = coffeeImgArr[currentIndex];

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
    } else
    if (currentIndex === coffeeArr.length - 1) {
        currentIndex = 0;
        leftIndex++;
        rightIndex++;
    }
    current.innerHTML = coffeeArr[currentIndex];
    /*NEW*/coffeeSelect.value = currentIndex;
    currentCoffee.innerHTML = coffeeArr[currentIndex].toUpperCase();
    currentCoffeePrice.innerHTML = coffeePriceArr[currentIndex];
    currentImg.src = coffeeImgArr[currentIndex];
    leftButton.innerHTML = coffeeArr[leftIndex];
    rightButton.innerHTML = coffeeArr[rightIndex];
}

function scrollCoffeesLeft() {
    if (currentIndex !== 0) {
        currentIndex--;
        if (leftIndex === 0) {
            leftIndex = coffeeArr.length - 1;
        } else {
            leftIndex--;
        }
        if (rightIndex === 0) {
            rightIndex =  coffeeArr.length - 1;
        } else {
            rightIndex--;
        }
    } else
    if (currentIndex === 0) {
        currentIndex = coffeeArr.length - 1;
        leftIndex--;
        rightIndex--;
    }
    current.innerHTML = coffeeArr[currentIndex];
    /*new*/coffeeSelect.value = currentIndex;
    currentCoffee.innerHTML = coffeeArr[currentIndex].toUpperCase();
    currentCoffeePrice.innerHTML = coffeePriceArr[currentIndex];
    currentImg.src = coffeeImgArr[currentIndex];
    leftButton.innerHTML = coffeeArr[leftIndex];
    rightButton.innerHTML = coffeeArr[rightIndex];
}

//Implementing functionality for the drop-down list
function updateCoffeeSelect() {
    currentIndex = coffeeSelect.value;
    if (currentIndex > 0 && currentIndex < coffeeArr.length - 1) {
        leftIndex = currentIndex - 1;
        rightIndex = currentIndex + 1;
    } else if (currentIndex === 0) {
        leftIndex = coffeeArr.length - 1;
        rightIndex = 1;
    } else if (currentIndex === coffeeArr.length - 1) {
        leftIndex = coffeeArr.length - 2;
        rightIndex = 0;
    }
    current.innerHTML = currentIndex;
    currentCoffee.innerHTML = coffeeArr[currentIndex].toUpperCase();
    currentCoffeePrice.innerHTML = coffeePriceArr[currentIndex];
    currentImg.src = coffeeImgArr[currentIndex];
    leftButton.innerHTML = leftIndex;
    rightButton.innerHTML = rightIndex;
}