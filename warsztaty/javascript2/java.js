'use strict';

function pobierzImie(event) {
    event.preventDefault(); 
    //console.log(document.getElementsByTagName('input')[0],value);
    var inputs = document.getElementsByTagName('input');
    for( var i = 0; i < inputs.length; i++) {
        if(inouts[i].value !='Submit') {
            console.log(inputs[i].value);
        }
    }
}
    
