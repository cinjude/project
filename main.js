const menu = document.querySelector("ul.nav_menu")

const icon = document.getElementById("icon")

icon.addEventListener("click", () => menu.classList.toggle("visible"))

menu.addEventListener("click", () => menu.classList.toggle("visible"))

