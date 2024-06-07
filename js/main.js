// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


const mailDB = ["mario@gmail.com","filippo@gmail.com","alessia@gmail.com","jhonny@gmail.com"]
const mailContainer = document.getElementById("mail_container")
// Creazione bottone
let btnMail = document.getElementById("user_mail")
// Click per invio mail e verifica
btnMail.addEventListener("click",
    () => {
        let pass = false
        let mailUser = document.querySelector("input").value
        for (let i = 0; i < mailDB.length; i++) {
            let listMail = mailDB[i]
            // console.log(listMail)
            
            if (mailUser === listMail) {
                pass = true
            } 
        }
        if (pass) {
            mailContainer.className = "win"
            mailContainer.innerHTML = "<span>presente</span>"
        } else {
            mailContainer.className = "lose"
            mailContainer.innerHTML = "<span>non presente</span>"
        }
    }  
)
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

dadiContainer.addEventListener("click",
    () => {
        // Gnerazione numeri randomici giocatore e pc
        let numPl = Math.floor(Math.random() * 6)
        let numPc = Math.floor(Math.random() * 6)

        // Creazion elemento p in pagina
        let newP = document.createElement("div")
        newP.className = "my_style"
        // Elemento appena creato attacoto al div dadiContainer
        dadiContainer.append(newP)
        // Stampa in pagina
        newP.innerHTML = `<h3>IL NUMERO DEL GIOCATORE E' ${numPl}</h3><h3>IL NUMERO DEL PC E' ${numPc}`
        console.log("Numero del Giocatore", numPl)
        console.log("numero del PC", numPc)
        let result = document.getElementById("risultato")
        // comparazione di victa
        if (numPl > numPc) {
            result.className = "win"
            result.append("Il giocatore ha vinto!!")
            console.log("Giocatore vincente")
        } else if (numPc > numPl) {
            result.className = "lose"
            result.append("Il PC ha vinto!!")
            console.log("Pc vincente")
        } else {
            result.className = "draw"
            result.append("Pareggio!!")
            console.log("Pareggio")
        }
    }
)
// Gnerazione numeri randomici giocatore e pc
// let numPl = Math.floor(Math.random() * 6);
// let numPc = Math.floor(Math.random() * 6);
// console.log("Numero del Giocatore", numPl)
// console.log("numero del PC", numPc)
// // comparazione di victa
// if (numPl > numPc) {
//     console.log("Giocatore vincente")
// } else if (numPc > numPl) {
//     console.log("Pc vincente")
// } else {
//     console.log("Pareggio")
// }




