const fechaActual = new Date();
console.log(fechaActual);

const miFechaNacimiento = new Date("July 13, 1983");
console.log(miFechaNacimiento);

const esHoyMasTarde = fechaActual > miFechaNacimiento;
console.log(esHoyMasTarde);

const diaNacimiento = miFechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = miFechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

const anioNacimiento = miFechaNacimiento.getFullYear();
console.log(anioNacimiento);

