var view = document.getElementById("view");
var cover = document.getElementById("cover");
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menu-btn");

var menuOpen = true;


function setView(src, coverColor) {
    cover.style.backgroundColor = coverColor;
    view.style.backgroundColor = (coverColor === "white") ? "black" : "white";
    view.src = src;
    view.onload = () => {
        toggleMenu();
    };
}

function toggleMenu() {
    if (menuOpen) {
        menu.classList.add("hide");
        cover.classList.add("hide");
        menuBtn.innerHTML = ">>";
        menuOpen = false;
    }
    else {
        menu.classList.remove("hide");
        cover.classList.remove("hide");
        menuBtn.innerHTML = "<<";
        menuOpen = true;
    }
}

view.onload = () => {
    view.contentDocument.getElementById("description").innerHTML +=
    " Click the button on the upper left to see some things I've done.";
};


setTimeout(() => menuOpen ? toggleMenu() : 0, 1500);
