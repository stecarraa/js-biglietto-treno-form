// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.26 € al km)
// va applicato uno sconto del 15% per i minorenni
// va applicato uno sconto del 35% per gli over 65.




const checkPrice =document.getElementById('checkPrice')






checkPrice.addEventListener('click',function(){

    let userAge =parseInt( document.getElementById("userAge").value);
    let price =parseInt (document.getElementById("distance").value) * 0.26;

            document.getElementById('name').innerHTML = userName.value;
            document.getElementById('coach').innerHTML = ( Math.floor( Math.random() * 9 ) + 1 );
            document.getElementById('CPcode').innerHTML = ( Math.floor( Math.random() * 10000) + 90000 );

    if (userAge < 18){
        price = price - ((price * 15) / 100);
        message = 'Essendo un minore hai diritto allo sconro del 15%! il prezzo del tuo biglietto è: ';
        document.getElementById('offer').innerHTML ='Sconto Minorenni 15%';
        document.getElementById('price').innerHTML =price.toFixed(2) + '€';
    } else if (userAge > 65){
        price = price - ((price * 35) / 100);
        message = 'Essendo un veterano hai diritto allo sconro del 35%! il prezzo del tuo biglietto è: ';
        document.getElementById('offer').innerHTML ='Sconto Veterani 40%';
        document.getElementById('price').innerHTML =price.toFixed(2) + '€';
    } else {
        message = 'Non hai diritto a sconti, ti tocca pagare : '
        document.getElementById('offer').innerHTML ='Biglietto Prezzo Intero';
    }
    message = message + price.toFixed(2) + '€'
console.log(message);
})


