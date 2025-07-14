const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];
console.log(fourthTeacher); // Stampa: "Phil";

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4] = "Patrick"; // Sostituisco "Carlo" con "Patrick"
console.log(teachers); // risultato in console

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

let lastTeacher = null; // sostituisco const con let per poter assegnare dopo
const newTeachers = []; // creo un array vuoto pronto per essere riempito
for (let i = 0; i < teachers.length - 1; i++) {
  newTeachers.push(teachers[i]); // copiamo tutti tranne l’ultimo
}

lastTeacher = teachers[teachers.length - 1];

console.log(lastTeacher);    // L'ultimo insegnante ovvero 'Luca'
console.log(newTeachers);    // Array senza l’ultimo elemento

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
let firstTeacher = null;
const neWteachers = [];

// Salviamo il primo insegnante
firstTeacher = teachers[0];

// Copiamo tutti gli altri insegnanti (tranne il primo)
for (let i = 1; i < teachers.length; i++) {
  neWteachers.push(teachers[i]);
}

console.log(firstTeacher);   // sarebbe 'Nathan'
console.log(neWteachers);    // array senza 'Nathan'

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

const newInsegnante = [];

for (let i = 0; i < teachers.length; i++) {
  newInsegnante[i] = teachers[i]; // copiamo tutti gli insegnanti
}

// Aggiungiamo 'Vanessa' in fondo
newInsegnante[newInsegnante.length] = 'Vanessa';

console.log(newInsegnante);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;