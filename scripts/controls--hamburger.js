
// De volgende code is gelijk aan wat er is geschreven tijdens de css challenge.

const menuNav = document.querySelector("nav")
const menuClick = document.querySelector("#mobile-menu")

menuClick.addEventListener("click", openMenu)

function openMenu() {
    menuNav.classList.toggle("--mobile-menu-is-open")

    if (menuNav.classList.contains("--mobile-menu-is-open")) {
        console.log("<nav> has --mobile-menu-is-open")
    } else {
        console.log("<nav> does not have --mobile-menu-is-open")
    }
}