
function pwngen() {
// NOME INPUT

let nome = prompt ("Inserisci il tuo nome");

// COGNOME INPUT

let cognome = prompt ("Inserisci il tuo cognome"); 

// COLORE PREFERITO

let colorepreferito = prompt ("Inserisci il tuo colore preferito");

// Anno Corrente

let annocorrente = 2023;

// password

let password = `${nome}${cognome}${colorepreferito}${annocorrente}`;

// Function calc

document.getElementById("password").innerText = password;

switch (colorepreferito) {
    case "rosso":
        document.getElementById("password").style.backgroundColor = "red";
        break
    case "giallo":
        document.getElementById("password").style.backgroundColor = "yellow";
        break
    case "verde":
        document.getElementById("password").style.backgroundColor = "green";
        break
}
}