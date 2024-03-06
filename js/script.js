const generateTiket = document.querySelector('#generate-button');
console.log(generateTiket)
generateTiket.addEventListener('click', function () {

    const userKm = document.querySelector('#user-km').value;
    console.log(userKm)
    const userAge = document.querySelector('#user-age').value;
    console.log(userAge)

    
    let priceTicket = 0.20 * userKm;
    console.log(priceTicket);

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

    const priceFinal = priceTicket - discount ;
    console.log(priceFinal)

    const priceFinalRounded = priceFinal.toFixed(2)
    console.log(priceFinalRounded)

    

    let userMessage = document.querySelector('.user-message');
    userMessage.innerHTML =`Il costo del biglietto è di ${priceFinalRounded}€ ${specialMessage}`;

})

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    const userKm = document.querySelector('#user-km').value = ' ';
    console.log(userKm)
    const userAge = document.querySelector('#user-age').value = ' ';
    console.log(userAge)

    const userMessage = document.querySelector('.user-message');
    userMessage.innerHTML = '';
    
});






