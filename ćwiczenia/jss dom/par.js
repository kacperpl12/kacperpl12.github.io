'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var divPoID = document.querySelector('#parSecond');
console.log(divPoID);

var linkiPoSelektorze = document.querySelectorAll('.link')
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach(function(link){
    console.log(link);
});

for(var i = 0; i < linkiPoSelektorze.length; i++){
    console.log(linkiPoSelektorze[i]);
}
