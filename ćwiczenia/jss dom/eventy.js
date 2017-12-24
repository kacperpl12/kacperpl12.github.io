'use strict';

function alarm(event) {
    event.preventDefault(); //zapobiamy domyslnej akcji
    console.log('klinieto w link');
    console.log(event.type);
    
}

var secondLink = document.getElementsByTagName('a')[1];

secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];
//thirdLink.removeEventListener('click', alarm);

//thirdLink.addEventListener('click', alarm);

function clickHeader () {
    console.log('Kliknąłes w header');
    
}
document.getElementsByTagName('header')[0].onclick = clickHeader;

function clickH1 (event) {
    event.stopPropagation();
    console.log('Kliknąłes w h1');
    
}
document.getElementsByTagName('h1')[0].onclick = clickH1;