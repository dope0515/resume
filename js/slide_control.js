var slideBody = document.querySelector('#slide_body');
var slideUp = document.querySelector('.slide_up');
var slideDown = document.querySelector('.slide_down');
var addressBox = document.querySelector('.address');
var menuBtn = document.querySelector('.menu_btn');
var currentIndexNum = document.querySelector('#current_index_num');
var heroMain = document.getElementsByClassName('hero_main');
var slideNum = document.querySelector('.slide_num');
var slideBorder = document.querySelector('.slide_border');
var menu = document.querySelector('.menu');
var currentSlide = 1;

function colorWhite() {
    slideUp.style = "background-color:#fff;";
    slideDown.style = "background-color:#fff;";
    slideNum.style = "color:#fff;";
    slideBorder="background-color:#fff";
    menuBtn.style = "background-color:#fff";
    addressBox.style = "color:#fff; border-color:#fff";
}

function colorNone() {
    slideUp.style = "background-color:none;";
    slideDown.style = "background-color:none;";
    addressBox.style = "color:#222; border-color:#222";
    slideNum.style = "color:#222;";
    slideBorder="background-color:#222";
    menuBtn.style = "background-color:none";
}

/*page up*/
function pageUp() {
    /*첫번째 페이지일 경우 작동 X*/
    if (currentSlide == 1) {
        heroMain[currentSlide-1].style = "top:0%";
    }

    else if (currentSlide == 5) {
    currentSlide -= 1;
    console.log("currentslide up" + currentSlide);
    heroMain[currentSlide].style = "top:100%; opacity:0";
    heroMain[currentSlide-1].style = "top:0%; opacity:1";
    colorWhite();
    currentIndexNum.innerHTML = `${currentSlide}`;
    }

    else {
    currentSlide -= 1;
    console.log("currentslide up" + currentSlide);
    heroMain[currentSlide].style = "top:100%; opacity:0";
    heroMain[currentSlide-1].style = "top:0%; opacity:1";
    colorNone();
    currentIndexNum.innerHTML = `${currentSlide}`;
    }
}

/*page down*/
function pageDown() {
    if (currentSlide == 5) {
        heroMain[currentSlide].style = "top:0%";
    }

    else if (currentSlide == 3) {
        heroMain[currentSlide].style = "top:0%; opacity:1";
        heroMain[currentSlide-1].style = "top:-100%; opacity:0";
        currentSlide += 1;
        currentIndexNum.innerHTML = `${currentSlide}`;
        colorWhite();
        console.log("currentslide down"+currentSlide);
    }

    else {
    heroMain[currentSlide].style = "top:0%; opacity:1";
    heroMain[currentSlide-1].style = "top:-100%; opacity:0";
    currentSlide += 1;
    currentIndexNum.innerHTML = `${currentSlide}`;
    colorNone();
    console.log("currentslide down"+currentSlide);
    }
}

function pageClick(num) {
    if(num == 0) {
        for(i=0;i<5;i++){
            heroMain[i].style = "top:100%; opacity:0";
        }
        heroMain[0].style = "top:0%; opacity:1";
        menu.style = "opacity:0; z-index:0;";
        currentIndexNum.innerHTML = `${num+1}`;
        colorNone();
        currentSlide = 1;
    }
    else if(num == 1) {
        heroMain[0].style = "top:-100%; opacity:0";
        heroMain[1].style = "top:0%; opacity:1";
        heroMain[2].style = "top:100%; opacity:0";
        heroMain[3].style = "top:100%; opacity:0";
        heroMain[4].style = "top:100%; opacity:0";
        menu.style = "opacity:0; z-index:0;";
        currentIndexNum.innerHTML = `${num+1}`;
        colorNone();
        currentSlide = 2;
    }
    else if(num == 2) {
        heroMain[0].style = "top:-100%; opacity:0";
        heroMain[1].style = "top:-100%; opacity:0";
        heroMain[2].style = "top:0%; opacity:1";
        heroMain[3].style = "top:100%; opacity:0";
        heroMain[4].style = "top:100%; opacity:0";
        menu.style = "opacity:0; z-index:0;";
        currentIndexNum.innerHTML = `${num+1}`;
        colorNone();
        currentSlide = 3;
    }
    else if(num == 3) {
        heroMain[0].style = "top:-100%; opacity:0";
        heroMain[1].style = "top:-100%; opacity:0";
        heroMain[2].style = "top:-100%; opacity:0";
        heroMain[3].style = "top:0%; opacity:1";
        heroMain[4].style = "top:100%; opacity:0";
        menu.style = "opacity:0; z-index:0;";
        currentIndexNum.innerHTML = `${num+1}`;
        colorWhite();
        currentSlide = 4;
    }
    else if(num == 4) {
        for(i=0;i<5;i++){
            heroMain[i].style = "top:-100%; opacity:0";
        }
        heroMain[4].style = "top:0%; opacity:1";
        menu.style = "opacity:0; z-index:0;";
        currentIndexNum.innerHTML = `${num+1}`;
        colorNone();
        currentSlide = 5;
    }
    menuLineTop.style = "top:30%;transform:rotate(0deg)";
    menuLineBottom.style = "bottom:30%;transform:rotate(0deg)";
    menuState = 1;
    console.log('click num' + currentSlide);
}

function init() {
 slideUp.addEventListener('click',pageUp);
 slideDown.addEventListener('click',pageDown);
}

init();
console.log(currentSlide);