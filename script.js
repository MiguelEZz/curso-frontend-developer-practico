const emailMenu = document.querySelector(".navbar-email");
const destopMenu= document.querySelector(".desktop-menu")

emailMenu.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu (){
    destopMenu.classList.toggle("inactive");
}