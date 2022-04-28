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

//4. SE minorenni applicare il 20% di sconto SE over 65 applicare il 40%
if (age < 18) {
  let sold = (ticketPrice * 20) / 100;
  ticketPrice = ticketPrice - sold;
  console.log(ticketPrice.toFixed(2));
} else if (age > 65) {
  let sold = (ticketPrice * 40) / 100;
  ticketPrice = ticketPrice - sold;
  console.log(ticketPrice.toFixed(2));
}
//N.B output prezzo finale con massimo due cifre decimali
