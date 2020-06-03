"use strict"

const htmlTag = document.querySelector("html");
const bodyTag = document.querySelector("body");
const myNav = document.querySelector(".navbar");
const myElem = document.querySelector(".navbar li a");

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100);
}

addEventListener("scroll", () => {
    myNav.style.setProperty("background-position-y", scrolled() > 10 ? "var(--pos2)" : "var(--pos1)");
}) 