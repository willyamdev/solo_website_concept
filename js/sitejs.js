
let buttonMenu;
let menuVertical;

window.onload = function () {
    buttonMenu = document.querySelector(".fa-bars");
    menuVertical = document.querySelector("#menu_vertical");
}

function openOrCloseMenu() {

    if (menuVertical.style.right == "0px") {
        buttonMenu.style.transform = "rotate(0deg)";
        menuVertical.style.right = "-305px";
    } else {
        buttonMenu.style.transform = "rotate(180deg)";
        menuVertical.style.right = "0px";
    }
}
