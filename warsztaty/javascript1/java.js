'use strict';
var button = document.getElementsByTagName('input') [0];




function ustawTlo() {
    button.value ='Kiliknij aby usunąć background color';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(element, index){
        if (index % 2 == 0){
        element.style.background ='red';
    } else {
             element.style.background= 'yellow';      
                       }
    
    button.addEventListener('click', ustawTlo);  
    button.addEventListener('click', usunTlo);
    });

}
function usunTlo() {
    button.value = 'Kiliknij aby usunąć background color';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(element, index){
if (index % 2 == 0) {
        element.style.background ='';
     }
        
    
                       });
button.addEventListener('click', ustawTlo);
button.addEventListener('click', usunTlo);
}

