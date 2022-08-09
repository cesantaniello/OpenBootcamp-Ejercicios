let miAltura = parseInt('179');
console.log(typeof miAltura);

let miAlturaPrecisa = parseFloat('1.79');
console.log(typeof miAlturaPrecisa);

let miPeso = parseFloat('65.5');
console.log(typeof miPeso);

let miPesoRedondeadoHaciaArriba = Math.ceil(miPeso);
console.log(miPesoRedondeadoHaciaArriba);

let miPesoRedondeadoHaciaAbajo = Math.floor(miPeso);
console.log(miPesoRedondeadoHaciaAbajo);

let maxValorJS = Number.MAX_VALUE;
let maxValorJSMasUno = Number.MAX_VALUE + 1;
(maxValorJSMasUno === maxValorJS) ? console.log('Son iguales') : console.log('No son iguales');