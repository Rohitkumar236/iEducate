let burger = document.querySelector(".burger");

let navlist = document.querySelector(".nav-list")

burger.addEventListener("click", () => {
    navlist.classList.toggle("show")
})