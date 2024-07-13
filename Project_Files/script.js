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
