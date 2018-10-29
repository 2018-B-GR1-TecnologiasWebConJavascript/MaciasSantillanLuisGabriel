// Int edad = 10; TIPADO
// NO TIPADO
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato;
var fechaNacimiento = new Date();

var kevin = {
    nombre :  " Kevin " ,
    SegundoNombre :  " Fabricio " ,
    apellidoPaterno :  ` Carate ` ,
    apellidoMaterno :  " Cabrera " ,
    edad :  23 ,
    casado :  false ,
    hijo :  null ,
    mascotas : {
        nombre :  " Shaggy "
    }
}; // objeto

console.log("edad", typeof edad);
console.log("edadString", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado); // boolean
console.log("hijos", typeof hijos); // object
console.log("dato valor", dato); // undefined
console.log("dato tipo", typeof dato); // undefined
console.log("fechaNacimiento", typeof fechaNacimiento); // object

console.log(kevin.mascotas.nombre);
console.log(kevin);
delete kevin.hijo;
console.log(kevin);
kevin.hija = {
    nombre: "????"
};

console.log(kevin.abuelo);

if (true) {
    console.log("Si"); //
} else {
    console.log("No");
}

if (false) {
    console.log("Si");
} else {
    console.log("No"); //
}

if (1) {
    // Truthy
    console.log("Si");
} else {
    console.log("No");
}

if (0) {
    // Falsy
    console.log("Si");
} else {
    console.log("No");
}

if (-1) {
    // Truthy
    console.log("Si");
} else {
    console.log("No");
}

if ("") {
    // Falsy
    console.log("Si");
} else {
    console.log("No");
}

if ("a") {
    // Truthy
    console.log("Si");
} else {
    console.log("No");
}

if (null) {
    // Falsy
    console.log("Si");
} else {
    console.log("No");
}

if ({ nombre: "adrian" }) {
    // Truthy
    console.log("Si");
} else {
    console.log("No");
}

if (new Date()) {
    // Truthy
    console.log("Si");
} else {
    console.log("No");
}

if (undefined) {
    // Falsy
    console.log("Si");
} else {
    console.log("No");
}