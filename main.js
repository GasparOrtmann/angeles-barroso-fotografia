const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const img = document.querySelector("#header");
const navList = document.querySelector("#nav-list");
const selectLangMobile = document.querySelector("#selected-lang-mobile");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    img.classList.add("shadow");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
    img.classList.remove("shadow");
    selectLangMobile.classList.remove("visible");
})

navList.addEventListener("click", () => {
    nav.classList.remove("visible");
    img.classList.remove("shadow");
})

selectLangMobile.addEventListener("click", () => {
    selectLangMobile.classList.add("visible");
})