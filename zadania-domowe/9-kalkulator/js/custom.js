/*

Stworz Kalkuator w HTML, CSS i czystym Javascript 

*/

'use strict';


window.onload = function() {

  var numbers = document.getElementsByTagName('span');
  var result = document.querySelectorAll('.result')[0];
  var clear = document.getElementsByClassName('clear')[0];

  for (var i = 0; i < numbers.length; i += 1) {
    if (numbers[i].innerHTML === '=') {
      numbers[i].addEventListener("click", calculate(i));
    } else {
      numbers[i].addEventListener("click", addValue(i));
    }
  }

  clear.onclick = function() {
    result.innerHTML = '';
  };


  function addValue(i) {
    return function() {
      if (numbers[i].innerHTML === '/') {
        result.innerHTML += '/';
      } else if (numbers[i].innerHTML === '*') {
        result.innerHTML += '*';
      } else if (numbers[i].innerHTML === '-') {
        result.innerHTML += '-';
      } else if (numbers[i].innerHTML === '+') {
        result.innerHTML += '+';
      } else {
        result.innerHTML += numbers[i].innerHTML;
      }
    };
  }

  function calculate(i) {
    return function() {
      result.innerHTML = eval(result.innerHTML);
    };
  }
};