// Selectors 
const introductionLink = document.querySelector(".introduction-link");
const introductionPage = document.querySelector(".introduction");
const navLinks = document.querySelectorAll(".item-links");
const boardLink = document.querySelector(".boards-link");
const boardPage = document.querySelector(".board-page");
const noteLink = document.querySelector(".notes-link");
const notePage = document.querySelector(".note-page");

// 
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".item-links.active").classList.remove("active")
        link.classList.add("active")
    })
})

