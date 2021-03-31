/*variable*/
const slideBody = document.querySelector("#slide_body_container");
const slideUp = document.querySelector('.slide_up');
const slideDown = document.querySelector('.slide_down');
const addressBox = document.querySelector('.address');
const currentIndexNum = document.querySelector('#current_index_num');

let pagePercent = 0;

/*make color white*/
function colorWhite() {
    slideDown, slideUp, slideBorder.style = "background-color:#fff;";
    headerTxt, slideNum.style = "color:#fff;";
    addressBox.style = "color:#fff; border-color:#fff";
};

/*make color basic*/
function colorNone() {
    slideDown, slideUp.style = "background-color:none;";
    addressBox.style = "color:#222; border-color:#222";
    headerTxt, slideNum.style = "color:#222;";
    slideBorder.style="background-color:#222";
};

/*page down*/
function pageDown() {
    pagePercent = pagePercent + 100;
    slideBody.style = "transform: translateY(-"+ pagePercent +"%);";
    currentIndexNum.innerHTML = `${pagePercent/100 + 1}`;
    console.log(pagePercent);
    if(pagePercent == 500) {
        slideBody.style = "transform: translateY(-400%);";
        pagePercent = 400;
        currentIndexNum.innerHTML = `${5}`;
    };
};

function pageUp() {
    pagePercent = pagePercent - 100;
    slideBody.style = "transform: translateY(-"+ pagePercent +"%);";
    currentIndexNum.innerHTML = `${pagePercent/100 + 1}`;
    console.log(pagePercent);
    if(pagePercent == 0) {
        slideBody.style = "transform: translateY(0%);"; 
    }
    else if (pagePercent < 0) {
        pagePercent = 0;
        currentIndexNum.innerHTML = `${1}`;
    }; 
    console.log(pagePercent);
};

function pageClick(num) {
    slideBody.style = "transform: translateY(-"+ num*100 +"%);";
    menu.style = "opacity:0; z-index:0;";
    menuLineTop.style = "top:30%;transform:rotate(0deg)";
    menuLineBottom.style = "bottom:30%;transform:rotate(0deg)";
    currentIndexNum.innerHTML = `${num + 1}`;
    pagePercent = num*100;
    menuState = 1;
};

function remotePage(){
    slideDown.addEventListener('click',pageDown);
    slideUp.addEventListener('click',pageUp);
};

remotePage();