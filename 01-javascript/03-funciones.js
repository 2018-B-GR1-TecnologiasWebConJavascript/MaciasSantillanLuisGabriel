function holaMundo() {
    console.log("Hola mundo");
}

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';
    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + numeroDos;
    } else {
        console.error('Parametros no son numeros');
        return 0;
    }

}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7)); // 3

console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6, 7)); // 3

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNNumeros(true, 1, 2, 3));

function saludar(nombre, funcion) {
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("AdRiAn", nombreEnMayusculas));
console.log(saludar("AdRiAn", nombreEnMinuscula));
console.log(saludar("AdRiAn", nombreConPuntoAlFinal));


function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinuscula(nombre) {
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}

var arreglo = [1, 2, 3, 1, 1];

arreglo.findIndex(
    function (valorDelArreglo, indice, arreglo) {
        return 2;
    }
); // 1


function restar(a, b) {
    return a - b;
}

console.log(restar(4, 2)); // Ejecucion 2
console.log(typeof restar); // Tipo function
console.log(restar); // Definicion de la funcion

// Anonymous function
function nombre() {

}


var ejemplo = function () {
}; // funcion anonima

var adrian = {
    trabajo: function () {
        // implementacion
    }
};
adrian.trabajo();

var arreglo = [
     ()=> {
        // implementacion
    }
];

arreglo[0]();

saludar("Maria", function (nombre) {
    return nombre + " Eguez"
});


// tipos de variables

var variable; // NUNCA MAS


let variableDos = 2; //
variableDos = 3;  // = ...

const edad = 29; // SIEMPRE QUE PUEDAN usar esta
// edad = 30;

const vicente = {
    nombre: 'Vicente'
};

vicente.nombre = 'Adrian';
vicente.isPrototypeOf();
vicente.hasOwnProperty();

//vicente = {
//    algo: 'mas'
//};


const arregloUnoDos = [1, 2];
arregloUnoDos[0] = 3;
arregloUnoDos.push(3);
arregloUnoDos.sort();

// arregloUnoDos = [1, 2, 3, 4, 5];

const nombre = 'Adrian';
// nombre = 'Vicente';
nombre.toUpperCase();

const casado = true;
// casado = false;

const hijos = null;
// hijos = 1;

const ganarDinero = function () {
    return 1;
};

//ganarDinero = function () {
//    return 2;
//};


// NUNCA VAMOS FUNCIONES ANONIMAS


const elevarAlCuadrado = function (numero) {
    return numero * numero;
};

// FAT ARROW FUNCTION    ->    =>

const elevarAlCuadrado = (numero) => {
    return numero * numero;
};

const elevarAlCuadradoV2 = (numero) => numero * numero;

const elevarAlCuadradoV3 = numero => numero * numero;

const restarDosNumeros = (numUno, numDos) => numUno - numDos;

