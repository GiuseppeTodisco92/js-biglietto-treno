// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//1. chiedere età passeggero
let age = Number(prompt('inserisci età'));
console.log(age);
while (isNaN(age)) {
  alert('Il valore inserito non è numerico');
  age = Number(prompt('inserisci età'));
  console.log(age);
}

//2. chiedere km che si vogliono effettuare
let km = Number(prompt('inserire quanti km si vogliono effettuare'));
console.log(km);
while (isNaN(km)) {
  alert('Il valore inserito non è numerico');
  km = Number(prompt('inserire quanti km si vogliono effettuare'));
  console.log(km);
}

//3. definire il prezzo del biglietto moltiplicando i km * 0.21
let ticketPrice = km * 0.21;
console.log(ticketPrice);

document.getElementById('initialprice').innerHTML =
  'prezzo iniziale : ' + ticketPrice.toFixed(2) + '€';

//4. SE minorenni applicare il 20% di sconto SE over 65 applicare il 40%
let sale = 0;
if (age < 18) {
  sale = (ticketPrice * 20) / 100;
  ticketPrice = ticketPrice - sale;
  console.log(ticketPrice.toFixed(2));
  document.getElementById('discountedprice').innerHTML =
    'per i minori di 18 anni abbiamo applicato uno sconto del 20% ! pari a : ' +
    sale.toFixed(2) +
    '€';
} else if (age >= 65) {
  sale = (ticketPrice * 40) / 100;
  ticketPrice = ticketPrice - sale;
  console.log(ticketPrice.toFixed(2));
  document.getElementById('discountedprice').innerHTML =
    'per gli over 65 abbiamo applicato uno sconto del 40% ! pari a : ' +
    sale.toFixed(2) +
    '€';
} else if (age >= 18 || age <= 65) {
  document.getElementById('discountedprice').innerHTML =
    'Non ti facciamo nessuno sconto .... VAI A LAVORARE !';
}

document.getElementById('totalprice').innerHTML =
  'prezzo finale : ' + ticketPrice.toFixed(2) + '€';
//N.B output prezzo finale con massimo due cifre decimali
