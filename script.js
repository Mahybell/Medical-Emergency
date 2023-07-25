const harmburger = document.querySelector(".harmburger");
const navBar = document.querySelector(".nav-area");

harmburger.addEventListener("click", () => {
    harmburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. 
addEventListener("click", () => {
    harmburger.classList.remove("active");
    navBar.classList.remove("active");
}))
