let listaDeCompras = ["Leche", "Huevos", "Pan", "Aceitunas", "Hortalizas"];
console.log(listaDeCompras);

listaDeCompras.push("Aceite de Girasol");
console.log(listaDeCompras);

listaDeCompras.pop();
console.log(listaDeCompras);

let pelisFavoritas = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    fecha: new Date ("October 20 1972"),
  },
  {
    titulo: "El Padrino 2",
    director: "Francis Ford Coppola",
    fecha: new Date ("October 13 1975"),
  },
  {
    titulo: "El Padrino 3",
    director: "Francis Ford Coppola",
    fecha: new Date ("March 1 1991"),
  },
];

//Peliculas posteriores al 1 de enero de 2010
const pelisNuevas = pelisFavoritas.filter(pelis => (pelis.fecha > new Date ("January 1 2010")))
console.log(pelisNuevas);

//Directores de la lista de películas original
function directores ({director}) {
  return `${director}`;
}
const directoresPelis = pelisFavoritas.map(directores);
console.log(directoresPelis);

//Títulos de la lista de películas original
function titulos ({titulo}) {
  return `${titulo}`;
}
const titulosPelis = pelisFavoritas.map(titulos);
console.log(titulosPelis);

//Lista de directores y títulos (Concatenación)
const listaDirectoresTitulos = directoresPelis.concat(titulosPelis);
console.log(listaDirectoresTitulos);

//Lista de directores y títulos (Propagación)
const listaDirectoresTitulos2 = [...directoresPelis, ...titulosPelis];
console.log(listaDirectoresTitulos2);