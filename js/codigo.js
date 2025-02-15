
// Listas de emojis a utilizar
let listaUnoGatos = ["😺", "😸", "😹"],
    listaDosGatos = ["🐈", "🐾"],
    listaTresGatos = ["🐈", "🐈‍⬛", "🐾"];

/* Funciones para imprimir en la consola lo que pide cada ejercicio */
function ejercicioUno() {
    let cantidadDeGatos = Math.floor((Math.random() * 10)+1); /* Número random del 1 al 10. Se definen dentro de las funciones con el fin de que no haga falta reiniciar la página para cambiar de número */
    for (let i = 1; i < (cantidadDeGatos + 1); i++) {
        if (i % 3 == 0) {
            console.log("Gato #" + i + " " + listaUnoGatos[2]);
        } else if ((i - 2) % 3 == 0) {
            console.log("Gato #" + i + " " + listaUnoGatos[1]);
        } else {
            console.log("Gato #" + i + " " + listaUnoGatos[0]); 
        } 
    } /* Alterna entre los tres emojis para cada iteración */
}

function ejercicioDos() {
    let cantidadDeGatos = Math.floor((Math.random() * 10)+1);
    let cantidadDePasos = Math.floor((Math.random() * 10)+1); // Idem función 'ejercicioUno()'
    for (let i = 1; i < cantidadDeGatos; i++) {
        console.log(listaDosGatos[0] + listaDosGatos[1].repeat(cantidadDePasos));
    } /* Repite misma cantidad de pasos para cada iteración */
}

function ejercicioTres() {
    let cantidadDeGatos = Math.floor((Math.random()*10)+1)
    let cantidadDePasos = Math.floor((Math.random() * 10) + 1); // Idem función 'ejercicioUno()'
    for (let i = 1; i < cantidadDeGatos; i++) {
        if (i % 2 != 0) {
            console.log(listaTresGatos[0] + listaTresGatos[2].repeat(cantidadDePasos));
        } else {
            console.log(listaTresGatos[1] + listaTresGatos[2].repeat(cantidadDePasos));
        }
    } /* Idem función 'ejercicioDos()', pero alterna entre gato naranja y gato negro en cada iteración */
}