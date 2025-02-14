var listaEmojis = ["🐈","🐾"];
var cantidadDeGatos = Math.round(Math.random() * 10);
var cantidadDePasos = Math.round(Math.random() * 10);

for (i = 1; i < cantidadDeGatos; i++) {
    console.log(listaEmojis[0] + listaEmojis[1].repeat(cantidadDePasos));
}