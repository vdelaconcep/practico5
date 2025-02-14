var listaEmojis = ["🐈", "🐈‍⬛", "🐾"];
var cantidadDeGatos = Math.round(Math.random() * 10);
var cantidadDePasos = Math.round(Math.random() * 10);

for (i = 1; i < cantidadDeGatos; i++) {
    if (i % 2 != 0) {
        console.log(listaEmojis[0] + listaEmojis[2].repeat(cantidadDePasos));
    } else {
        console.log(listaEmojis[1] + listaEmojis[2].repeat(cantidadDePasos));
    }
}