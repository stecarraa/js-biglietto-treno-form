// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.26 € al km)
// va applicato uno sconto del 15% per i minorenni
// va applicato uno sconto del 35% per gli over 65.





if (age < 18){
    price = price - ((price * 15) / 100);
    message = 'Essendo un minore hai diritto allo sconro del 15%! il prezzo del tuo biglietto è: ';
} else if (age > 65){
    price = price - ((price * 35) / 100);
    message = 'Essendo un veterano hai diritto allo sconro del 35%! il prezzo del tuo biglietto è: ';
} else {
    message = 'Non hai diritto a sconti, ti tocca pagare : '
}

message = message + price.toFixed(2) + '€'