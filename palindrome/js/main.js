'use strict';
//RICHIESTA ALL UTENTE DI INSERIRE UNA PAROLA//
const userChoice = prompt('inserisci una parola');
//OPERAZIONE DI CONTROLLO DELL PAROLA
if (palindrome(userChoice)) {
    console.log('la parola è giusta');
} else {
    console.log('la parola è sbagliata');
}
//DICHIARAZIONE DELLA FUNZIONE//
function palindrome(paliWord) {
    // ISTRUZIONI PER OUTPUT
    let correctWord = false;
    //CHECK PER split(divide una stringa in un array), reverse(inverte un array sul posto.), join(unisce tutti gli elementi di un array in una stringa.).
    let reversePali = paliWord.split('').reverse().join('');
    //OPERAZIONE DI CONTROLLO NELLA FUNZIONE 
    if (paliWord === reversePali) {
        correctWord = true;
    }
    return correctWord;
}

