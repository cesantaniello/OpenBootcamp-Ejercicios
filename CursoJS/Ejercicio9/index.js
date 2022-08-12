const logger = require('./logger');

const miFuncion = val => {
  if (typeof val === 'string') {
    return val.toUpperCase();
  }
  throw new Error('No es un string');
}

const palabra = 123;

try {
  const mayuscula = miFuncion(palabra);
  console.log(mayuscula);
} catch (error) {
  logger.error("No es una palabra");
}finally {
  console.log("Se ha ejecutado la funcion");
}