// Declaration Les variable

let navItems = document.getElementById("navItems");
let btnMenu = document.getElementById("menuIcon");

btnMenu.addEventListener("click", () => {
    if (navItems.style.left == "-900px") {
        navItems.style.left = "0px";
    } else {
        navItems.style.left = "-900px";
    }
});
