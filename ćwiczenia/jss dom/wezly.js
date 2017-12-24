'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[1];
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //tworzenie nowego paragrafu
var newElementContent = document.createTextNode('To jest nowy paragraf'); //komentarz do textu


newElement.appendChild(newElementContent);
console.log(newElement); //dodaj no
istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);



var aLinks = document.querySelectorAll('a');
console.log(aLinks);

var br = document.createElement('br'); 

//for
//(var i = 0; i < aLinks.length; i++) {
 //   var br = document.createElement('br'); 
   // aLinks[i].removeAttribute('class');
   // aLinks[i].parentElement.insertBefore(br, aLinks[i].nextSibling);
    
//}//

aLinks.forEach(function(Element)
    { var br = document.createElement('br');
     aLinks[i].removeAttribute('class');
     aLinks[i].parentElement.insertBefore(br, aLinks[i].nextSibling);
});
 