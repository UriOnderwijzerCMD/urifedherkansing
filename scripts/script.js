// JavaScript Document
console.log("hi");



// OPENEN HAMBURGER
const menuOpenButton = document.querySelector("nav ul li:last-of-type img");
const burgermenu = document.querySelector("header nav:nth-of-type(1)");

menuOpenButton.onclick = openMenu;

function openMenu() {
    burgermenu.classList.toggle("toonMenu");
  }

// SLUITEN HAMBURGER
// const menuSluitButton = document.querySelector("nav ul li:last-of-type img");

// menuSluitButton.onclick = sluitMenu;

//   function sluitMenu() {
//   burgermenu.classList.remove("toonMenu");
// }