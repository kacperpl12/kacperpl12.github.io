'use strict';

var imie; 
var imieDamskie = 'Kaja';
var wiek = 37;

imie = imieDamskie;

console.log(imie);
console.log(wiek);

function wyswietlZmienna() {
    //tutaj kod funkcji
    
    var nazwisko ='kowalski';
    console.log(nazwisko);
}
wyswietlZmienna();

var zmienna  = function () {
    console.log('funkcja anonimowa')
}
zmienna();

function mnozenie(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3;
    console.log('Wynik mnozenia: ' + wynik);
    return wynik;
}
mnozenie(3, 4, 5);

var liczba1 = 5;
var liczba2 = 10;
var liczba3 = 3;

console.log(mnozenie(liczba1, liczba2, liczba3));

var wynikDzialaniaFukcji = mnozenie(liczba1, 34, liczba2);
console.log(wynikDzialaniaFukcji);

