// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.





const generateTiket = document.querySelector('#generate-button');
console.log(generateTiket)
generateTiket.addEventListener('click', function () {

    // creare una variabile per prendere ciò che è scritto nel input 
    const userKm = document.querySelector('#user-km').value;
    console.log(userKm)
    const userAge = document.querySelector('#user-age').value;
    console.log(userAge)

    // calcolare prezzo biglietto
    let priceTicket = 0.21 * userKm;
    console.log(priceTicket);

    // applicare sconto 20% se minorenne o 40% se over 65
    let discount = 0; 

    let specialMessage = ' ';

    if (userAge < 18){

      discount = priceTicket * 20 / 100;
      specialMessage = 'con lo sconto del 20%';
    alert('clicca ok per avere uno sconto del 20%')

    } else if (userAge >= 65){

      discount = priceTicket * 40 / 100;
      specialMessage = 'con lo sconto del 40%';
     alert('clicca ok per avere uno sconto del 40%')
    }
     console.log(discount)

    //  formula per avere prezzo finale meno lo sconto
    const priceFinal = priceTicket - discount ;
    console.log(priceFinal)

    // al prezzo finale del biglietto vedere max 2 decimali dopo la virgola
    const priceFinalRounded = priceFinal.toFixed(2)
    console.log(priceFinalRounded)

    
    // comunicare prezzo finale all'utente
    let userMessage = document.querySelector('.user-message');
    userMessage.innerHTML =`${priceFinalRounded}€ <br>${specialMessage}`;

    // formula numero random
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber , 'carozza')
    
    // generare numero carrozza random
    let numberVagon = document.querySelector('.number-vagon');
    console.log(numberVagon)
    numberVagon.innerHTML = `${randomNumber}`
    
    // fare vedere il biglietto
    const ticketVisible = document.querySelector('#tiket');
    console.log(ticketVisible)
    ticketVisible.classList.remove('none');
    
   
})

// creare bottore per resettare tutto
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {

    // lasciare campi vuoti per dare valore o
    const userKm = document.querySelector('#user-km').value = ' ';
    console.log(userKm)
    const userAge = document.querySelector('#user-age').value = ' ';
    console.log(userAge)

    const userMessage = document.querySelector('.user-message');
    userMessage.innerHTML = '';

     // fare scomparire il biglietto
     const ticketVisible = document.querySelector('#tiket');
     console.log(ticketVisible)
     ticketVisible.classList.add('none');
    
});






