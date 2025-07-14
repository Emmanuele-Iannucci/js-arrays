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

// con il metodo .pop ()

lastTeacher = teachers.pop(); // rimuove 'Luca' e lo assegna alla variabile

console.log(lastTeacher); // 'Luca'
console.log(teachers);    // array aggiornato senza 'Luca'

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

// con il metodo .shift
firstTeacher = teachers.shift();

console.log(firstTeacher); // 'Nathan'
console.log(teachers);     // ['Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca']

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push('Vanessa');

console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift('Sarah');
console.log(teachers); 


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Lewis') {
   const lewisIndex = i; /*const lewisIndex = i; può vivere solo dentro l’if. In questo caso
   possiamo usare questa costruzione perché non abbiamo bisogno nuovamente di lewisIndex fuori dopo */
   console.log (lewisIndex);
    break;
  }
}

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty); /* In questo caso la console ci darà il valore booleano "false" perché
l'array non è vuoto*/