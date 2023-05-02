const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const img = document.querySelector("#header");
const navlist = document.querySelector("#nav-list");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    img.classList.add("shadow");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
    img.classList.remove("shadow");
})

navlist.addEventListener("click", () => {
    nav.classList.remove("visible");
    img.classList.remove("shadow");
})