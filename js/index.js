document.querySelectorAll('.digits, .operation').forEach(el=>el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const targer = e.target;
    const display = document.querySelector('.display');
    display.value += targer.innerText;
}

document.querySelector('.equal').addEventListener('click', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    const display = document.querySelector('.display');
    display.value = '';
}

document.querySelector('.cqr').addEventListener('click', cqr);

function cqr() {
    const display = document.querySelector('.display');
    display.value = Math.sqrt(display.value);
}

document.querySelector('.percent').addEventListener('click', percent);

function percent() {
    const display = document.querySelector('.display');
    display.value = display.value / 100 + "%";
}

document.querySelector('.square').addEventListener('click', square);

function square() {
    const display = document.querySelector('.display');
    display.value = display.value * display.value;
}

document.querySelector('.squarethree').addEventListener('click', squareThree);

function squareThree() {
    const display = document.querySelector('.display');
    display.value = display.value * 2 * display.value;
}

document.querySelector('.change').addEventListener('click', change);

function change() {
    const display = document.querySelector('.display');
    display.value = -display.value;
}

document.querySelector('.clear-last-num').addEventListener('click', clearLastNum);

function clearLastNum() {
    const display = document.querySelector('.display');
    display.value = display.value.substring(0, display.value.length - 1);
}

document.querySelector('.smail').addEventListener('click', smail);

function smail() {
    const display = document.querySelector('.display');
    display.value = 'why you so seriously?';
}