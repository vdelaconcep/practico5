var listaUnoGatos = ["😺", "😸", "😹"];
var listaDosGatos = ["🐈", "🐾"];
var listaTresGatos = ["🐈", "🐈‍⬛", "🐾"];

function ejercicio_uno() {
    var cantidadDeGatos = Math.round((Math.random() * 10));
    for (var i = 1; i < (cantidadDeGatos + 1); i++) {
        if (i % 3 == 0) {
            console.log("Gato #" + i + " " + listaUnoGatos[2]);
        } else if ((i - 2) % 3 == 0) {
            console.log("Gato #" + i + " " + listaUnoGatos[1]);
        } else {
            console.log("Gato #" + i + " " + listaUnoGatos[0]);
        }
    }
}

function ejercicio_dos() {
    var cantidadDeGatos = Math.round(Math.random() * 10);
    var cantidadDePasos = Math.round(Math.random() * 10);
    for (i = 1; i < cantidadDeGatos; i++) {
        console.log(listaDosGatos[0] + listaDosGatos[1].repeat(cantidadDePasos));
    }
}

function ejercicio_tres() {
    var cantidadDeGatos = Math.round(Math.random() * 10);
    var cantidadDePasos = Math.round(Math.random() * 10);
    for (i = 1; i < cantidadDeGatos; i++) {
        if (i % 2 != 0) {
            console.log(listaTresGatos[0] + listaTresGatos[2].repeat(cantidadDePasos));
        } else {
            console.log(listaTresGatos[1] + listaTresGatos[2].repeat(cantidadDePasos));
        }
    }
}