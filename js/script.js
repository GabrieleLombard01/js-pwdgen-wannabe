console.log('JS OK')

//Chiedere e salvare il nome dell'utente
const name = prompt('Come ti chiami?', 'Gabriele') 
console.log(name)

//Chiedere e salvare il cognome dell'utente
const surname = prompt("Qual'è il tuo cognome?", 'Lombardo') 
console.log(surname)

//Chiedere e salvare il colore dell'utente
const color = prompt("Qual'è il tuo colore preferito?", 'Rosso') 
console.log(color)

//Salvare la stringa 21
let passNumber = 21
console.log(passNumber)

//Costruire il messaggio da vedere in pagina
const message = 'La tua password è' + ' ' + name + surname + color + passNumber
console.log(message);

//Recupero un elemento dalla pagina
document.getElementById('message')