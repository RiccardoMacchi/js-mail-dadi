// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// let mailUser = prompt("qual è la tua mail?")
// const mailDB = ["mario@gmail.com","filippo@gmail.com","alessia@gmail.com","jhonny@gmail.com"]
// const mailContainer = document.getElementById("mail_container")

// for (let i = 0; i < mailDB.length; i++){
//     let listMail = mailDB[i]

//     if (mailUser === listMail){
//         console.log("mail presente nel database")
//         mailContainer.innerHTML = "<li>presente</li>"
//     } else if (mailUser !== listMail){
//         console.log("Tu Non Puoi Passareeee!!")
//         mailContainer.innerHTML = "<li>Non Presente</li>"
//     } 
// }

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const dadiContainer = document.getElementById("dadi_container");

// Gnerazione numeri randomici giocatore e pc
let numPl = Math.floor(Math.random() * 6);
let numPc = Math.floor(Math.random() * 6);
console.log("Numero del Giocatore", numPl)
console.log("numero del PC", numPc)
// comparazione di victa
if (numPl > numPc) {
    console.log("Giocatore vincente")
} else if (numPc > numPl) {
    console.log("Pc vincente")
} else {
    console.log("Pareggio")
}




