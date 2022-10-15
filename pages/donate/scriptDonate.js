'use strict'

const blackStrip = document.querySelector('.black-strip');
let circlesArr = blackStrip.querySelectorAll('.yellow-circle img');
let moneyArr = document.querySelectorAll('.price');
let donationInput = document.forms['donation-form']['amount'];

donationInput.addEventListener('input', findSameCircle, false);
blackStrip.addEventListener('click', changeDonate, false);

function changeDonate(event) {
    let isCircleInArr = false;
    for (let circle of circlesArr) {
        if (circle === event.target) {
            isCircleInArr = true;
        }
    }
    if (isCircleInArr) {
        for (let circle of circlesArr) {
            circle.className = 'hover-invis';
        }
        event.target.className = 'current';

        for (let sum of moneyArr) {
            sum.className = 'price';
        }
        event.target.nextElementSibling.className = 'price select';

        donationInput.value = event.target.nextElementSibling.textContent.slice(1);
    }
}

function findSameCircle() {
    let find = false;
    for (let sum of moneyArr) {
        if (sum.textContent.slice(1) === donationInput.value) {
            find = true;
            for (let sum of moneyArr) {
                sum.className = 'price';
            }
            sum.className = 'price select';

            for (let circle of circlesArr) {
                circle.className = 'hover-invis';
            }
            sum.previousElementSibling.className = 'current';
        } 
    }
    if (!find){
        for (let sum of moneyArr) {
            sum.className = 'price';
        }
        for (let circle of circlesArr) {
            circle.className = 'hover-invis';
        }
    }
    if (donationInput.value > 9999) {
        let newNumber = (donationInput.value + '');
        newNumber = newNumber.slice(0,newNumber.length - 1);
        donationInput.value = newNumber;
    }
}