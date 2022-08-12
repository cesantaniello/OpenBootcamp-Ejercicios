class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = ["JavaScript", "HTML", "CSS"];
  }
  obtenDatos() {
    return `Mi nombre es ${this.nombre} y curso ${this.asignaturas}`;
  }
}

const estudiante = new Estudiante("Juan");
console.log(estudiante.obtenDatos());