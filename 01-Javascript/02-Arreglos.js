var arreglo = [];

arreglo = [
    1,
    "Kevin",
    false,
    null,
    new Date(),
    {
        nombre: "Kevin"
    },
    [1, 2, 3, false]
];

/*console.log(arreglo[3]);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.splice(0,2);
console.log(arreglo);
arreglo.splice(4,0,1,2,3,4,5,6,7);
console.log(arreglo);
arreglo.splice(arreglo.indexOf(6),1);
console.log(arreglo);*/

var a1 = [1, 2];
var a2 = [6];
var a3 = [3, 4, 5];
var a4 = [7, 8, 9, 10];

console.log(...a1);
console.log(1, 2);

var arregloTotal = [...a1, ...a3, ...a2, ...a4];
console.log(arregloTotal);