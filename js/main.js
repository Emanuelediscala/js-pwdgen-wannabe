
let nome = prompt ("Inserisci il tuo nome");

console.log(`Il nome dell'utente è  ${nome}`);

let cognome = prompt ("Inserisci il tuo cognome"); 

console.log(`Il cognome dell'utente è ${cognome}`);

let colorepreferito = prompt ("Inserisci il tuo colore preferito");

console.log(`Il cognome dell'utente è ${colorepreferito}`);

let annocorrente = 2023;

let password = `${nome}${cognome}${colorepreferito}${annocorrente}`;

console.log(`${password}`);

document.getElementById("password").innerText = password;