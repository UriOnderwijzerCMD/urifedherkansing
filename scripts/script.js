// JavaScript Document
console.log("hi");



// OPENEN HAMBURGER
const menuOpenButton = document.querySelector("nav ul li:nth-child(4) svg");
const burgermenu = document.querySelector("header nav:nth-of-type(1)");

menuOpenButton.onclick = openMenu;

function openMenu() {
    burgermenu.classList.toggle("toonMenu");
  }


// FILTERMENU


const filtermenuOpenButton = document.querySelector("main section:nth-of-type(2) button");
const filtermenu = document.querySelector("main nav:nth-of-type(1)");

filtermenuOpenButton.onclick = openfilterMenu;

function openfilterMenu() {
    filtermenu.classList.toggle("toonfilterMenu");
    console.log("test")
  }

