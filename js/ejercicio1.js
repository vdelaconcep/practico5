var listaGatos = ["😺", "😸", "😹"];
var cantidadDeGatos = Math.round((Math.random()*10));

for (var i = 1; i < (cantidadDeGatos + 1); i++) {
    if (i % 3 == 0) {
        console.log("Gato #" + i + " " + listaGatos[2]);
    } else if ((i - 2) % 3 == 0) {
        console.log("Gato #" + i + " " + listaGatos[1]);
    } else {
        console.log("Gato #" + i + " " + listaGatos[0]);
    }
}