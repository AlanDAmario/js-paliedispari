'use strict';
//SCELTA DELL UTENTE PARI O DISPARI//
const userChoice = prompt('pari o dispari');
console.log(userChoice);

//SCELTA NUMERO UTENTE//
const userNumber = Number(prompt('scegli un mnumero tra 1 e 5'));
console.log(userNumber, 'scelta dell utente');

const max = 5;

//SCELTA CASUALE PC//
function randomNumber(max) {
    let pcNumber = Math.floor(Math.random() * max) + 1;
    return;
}
randomNumber();

//SOMMA TRAMITE FUNZIONE
function sum() {

    if (userChoice === 'pari' || userChoice === 'dispari') {

        // SOMMA SCELTE DELL UTENTE E DEL PC//

        const sum = max + userNumber;
        console.log('la somma è...', sum);

        //RESULT = 0 (PARI) RESULT = 1 (DISPARI)//
        let result = '';

        //RISULTATO SE PARI O DISPARI//
        if (sum % 2 === 0) {
            result = 'pari';

        } else {
            result = 'dispari';
        }

        console.log(result, sum);
    }
}
