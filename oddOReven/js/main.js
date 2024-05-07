'use strict';
//SCELTA DELL UTENTE PARI O DISPARI//
const userChoice = prompt('pari o dispari');
console.log(userChoice);

//SCELTA NUMERO UTENTE//
const userNumber = Number(prompt('scegli un mnumero tra 1 e 5'));
console.log(userNumber, 'scelta dell utente');

//RESULT = 0 (PARI) RESULT = 1 (DISPARI)//
let result = '';
//COUNTER 
const max = 5;

//RISULTATO SE PARI O DISPARI//
if (sum % 2 === 0) {
    result = 'pari';

} else {
    result = 'dispari';
}


//DEFINIRE VINCITORE//

let win = '';

if (result === 'pari' && userChoice === 'pari') {
    win = 'Hai vinto';

} else if (result === 'dispari' && userChoice === 'dispari') {
    win = 'Hai vinto';

} else {
    win = 'Hai perso';
}

console.log(win);

//SCELTA CASUALE PC TRAMITE FUNZIONE//
function randomNumber(max) {
    let pcNumber = Math.floor(Math.random() * max) + 1;
    return pcNumber;
}
// OPERAZIONE DI SOMMA TRAMITE FUNZIONE 
function sum() {
    const sum = pcNumber + userNumber;
    return sum;
}
