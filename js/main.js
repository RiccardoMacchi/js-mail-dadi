// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let mailUser = prompt("qual è la tua mail?")
const mailDB = ["mario@gmail.com","filippo@gmail.com","alessia@gmail.com","jhonny@gmail.com"]
const mailContainer = document.getElementById("mail_container")

for (let i = 0; i < mailDB.length; i++){
    let listMail = mailDB[i]

    if (mailUser === listMail){
        console.log("mail presente nel database")
        mailContainer.innerHTML = "<li>presente</li>"
    } else if (mailUser !== listMail){
        console.log("Tu Non Puoi Passareeee!!")
        mailContainer.innerHTML = "<li>Non Presente</li>"
    } 
}