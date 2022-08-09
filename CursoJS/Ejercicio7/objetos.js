Persona = 
  {
    nombre: "Carlos",
    apellido: "Santaniello",
    edad: 39,
    altura: 179,
    eresDesarrollador: true
  }


const edadPersona = Persona.edad;
console.log(edadPersona);

//Crea una lista de personas basada en el objeto Persona
const listaPersona = new Array(Persona);
console.log(listaPersona);

Amigos = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    altura: 180,
    eresDesarrollador: false
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 18,
    altura: 170,
    eresDesarrollador: true
  },
]

// Crea una lista de amigos basada en los objetos listaPersona y Amigos
const listaAmigos = [...listaPersona, ...Amigos];
console.log(listaAmigos);

//Ordena la lista de amigos por edad 
listaAmigos.sort((a, b) => a.edad - b.edad);
console.log(listaAmigos);