if(1 === '1'){
    console.log('Es verdad');
}else {
    console.log('No es verdad');
}

if(0 === ''){
    console.log('Es verdad');
}else {
    console.log('No es verdad');
}

/*if(Falsy === Falsy){
    console.log('Es verdad');
}else {
    console.log('No es verdad');
}*/


//Operadores

const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo
    .forEach(
        (valorActualDeLaIteracion, indice, arreglo) => {
            console.log('Valor: ', valorActualDeLaIteracion);
            console.log('Indice: ', indice);
            console.log('Arreglo: ', arreglo);
        }
    );

console.log(respuesta);
//Lo que se gana con el forEach, es màs sencillo de leer.

arreglo.forEach(v => console.log(v));
//arreglo.forEach(v => enviarPorCorreo(v));

// Map ... recibe los mismo parametros de la funcion anterior,
//Muta el arreglo -> Cambiar -> Reasignar el arreglo

const respuestaMap = arreglo
    .map(valorActual => valorActual.toUpperCase());

console.log(arreglo);
console.log(respuestaMap);

const arregloNumeros = [9, 1, 8, 5, 7, 3, 6, 4, 2, 10];

// Filter -> FILTRAR EL ARREGLO

const respuestarFilter = arregloNumeros
//.filter (valorActual => valorActual > 5);   // true
    .filter (n => n > 5)
    .map(n => n+1)
    .filter(n => n > 7)
    .forEach(n => console.log(n));  // true

console.log(respuestarFilter);

// find

const repuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(arregloNumeros.indexOf(7));
console.log(repuestaFindIndex);

//Para buscar y devuelve la primera ocurrencia tanto en
//indexOf .... FinIndex .... Find
const repuestaFind = arregloNumeros
    .findIndex(v => v === 7);

console.log(repuestaFind);

//some - boolean      ES PARA VER SI CUMPLE UNA CONDICION O NO

const respuestaSome = arregloNumeros
    .some(n => n % 11 === 0);
console.log(respuestaSome);

//Every     ES PARA VER SI CUMPLE UNA CONDICION O NO

const respuestaEvery = arregloNumeros
    .every(n => n < 5);

console.log(respuestaEvery);

//reduce
const respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion, valorActualDelArreglo) => {
            //(0 + 9 + 1, 8) => {
            return valorActualDeLaOperacion + valorActualDelArreglo
        },
        0
    );

console.log(respuestaReduce);

const respuestaReduce2 = arregloNumeros
    .reduce((acumulado, valorActual) => acumulado - valorActual, 100);
//.reduce((a, b) => a + b.sueldo, 0);

console.log(respuestaReduce2);

//const respuestaReduce3 = arregloNumeros
//  .reduce((acumulado, valorActual) =>
//   if (valorActual > 7)


//console.log(respuestaReduce3);