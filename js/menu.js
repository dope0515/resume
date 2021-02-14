let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu_btn');
let menuLineTop = document.getElementById('menu_line_top');
let menuLineBottom = document.getElementById('menu_line_bottom');
let menuState = 1;


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
