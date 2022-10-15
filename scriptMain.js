'use strict'

/*Слайдер для животных*/
let items = document.querySelectorAll('.page');
let currentItem = 0;
let isEnabled = true;

/*Рандомайзер положения карт */
//let imgsSlider = document.querySelectorAll('.slider-card');

function randomDiap(n, m) {
    return Math.floor(
        Math.random() * (m - n + 1)
    ) + n;
}

function mixImg(page) {
    let imgsSlider = page.querySelectorAll('.slider-card');
    for (let i = 0; i < 5; i ++) {
        page.append(imgsSlider[randomDiap(0,6)]);
    }
}
mixImg(items[0]);

/*Функции перелистывания и переприсвоения классов*/
function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active-page', direction);
    });
}

function showItem(direction){
    items[currentItem].classList.add('next-page', direction);
    mixImg(items[currentItem]);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next-page', direction);
        this.classList.add('active-page');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.arrow-circle-left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.arrow-circle-right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

/*Слайдер с отзывами*/
let sliderControl = document.querySelector('.range');
let sliderCards = document.querySelector('.container-featback-cards');
sliderControl.addEventListener('input', showComment, false);

if (document.documentElement.clientWidth <= 1345) {
    sliderControl.setAttribute('max','8');
} else {
    sliderControl.setAttribute('max','7');
}

function animateSwipe(n) {
    sliderCards.style.left = n + 'px';
}

function showComment() {
    let howFar = sliderControl.value;
    //console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= 1345) {
        switch(howFar) {
            case '0' :
                animateSwipe(0);
                break;
            case '1' :
                animateSwipe(-321);
                break;
            case '2' :
                animateSwipe(-642);
                break;
            case '3' :
                animateSwipe(-963);
                break;
            case '4' :
                animateSwipe(-1284);
                break;
            case '5' :
                animateSwipe(-1605);
                break;
            case '6' :
                animateSwipe(-1926);
                break;
            case '7' :
                animateSwipe(-2247);
                break;
            case '8' :
                animateSwipe(-2568);
                break;
        }
    } else{
        switch(howFar) {
            case '0' :
                animateSwipe(0);
                break;
            case '1' :
                animateSwipe(-296);
                break;
            case '2' :
                animateSwipe(-592);
                break;
            case '3' :
                animateSwipe(-888);
                break;
            case '4' :
                animateSwipe(-1184);
                break;
            case '5' :
                animateSwipe(-1480);
                break;
            case '6' :
                animateSwipe(-1776);
                break;
            case '7' :
                animateSwipe(-2072);
                break;
            case '8' :
                animateSwipe(-2368);
                break;
        }
    }
}

/*Попап с отзывами карт */
let cardsContainer = document.querySelector('.container-featback-cards');
cardsContainer.addEventListener('click', showPopupCards, false);
cardsContainer.addEventListener('click', hidePopupCards, false);

let backgroundsArr = document.querySelectorAll('.popup-back-card');

for (let background of backgroundsArr) {
    background.style.width = document.documentElement.clientWidth + 20 + 'px';
    background.style.left = -10 + 'px';
}

function showPopupCards(event) {
    if (document.documentElement.clientWidth > 980) {
        return;
    }
    if (event.target.closest('.gradient')) {
        event.target.closest('.gradient').nextElementSibling.classList.toggle('invis');
    }
}

function hidePopupCards(event) {
    if (event.target.className === 'popup-back-card' || event.target.className === 'popup-cross-card') {
        event.target.closest('.popup-back-card').classList.toggle('invis');
    }
}