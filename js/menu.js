var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu_btn');
var menuLineTop = document.getElementById('menu_line_top');
var menuLineBottom = document.getElementById('menu_line_bottom');
var menuState = 1;


function menuDisplayToggle() {
    if(menuState == 1) {
        menu.style = "opacity:0.96; z-index:3;";
        menuLineTop.style = "top:50%;transform:rotate(45deg)";
        menuLineBottom.style = "bottom:45%;transform:rotate(-47deg)";
        menuState = 0;
    }
    else if (menuState == 0) {
        menu.style = "opacity:0; z-index:0;";
        menuLineTop.style = "top:30%;transform:rotate(0deg)";
        menuLineBottom.style = "bottom:30%;transform:rotate(0deg)";
        menuState = 1;
    }
}

function init() {
    menuBtn.addEventListener('click',menuDisplayToggle);
}

init();