//Funcion sin parámetros que devuelve siempre true
function trueFunction(){
  return true;
}

console.log(trueFunction());


//Función asíncrona que devuelve un saludo con setTimeout
saludo();

function saludo(){
  setTimeout(() =>
    console.log("Hola soy una promesa"),5000);
}


//Función generadora de índices pares automáticos
function* indicesPares(){
  var i = 0;
  while(true){
    yield i;
    i += 2;
  }
}

for(let i of indicesPares()){
  if(i > 20){
    break;
  }
  console.log(i);
}



