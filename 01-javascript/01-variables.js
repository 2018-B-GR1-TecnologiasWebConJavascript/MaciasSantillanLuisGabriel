// Int edad = 10; TIPADO
// NO TIPADO
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato;
var fechaNacimiento = new Date();

var adrian = {
    "nombre": "Vicente",
    'segundoNombre': 'Adrian',
    apellidoPaterno: `Eguez`,
    apellidoMaterno: 'Sarzosa',
    edad: 29,
    casado: false,
    hijo: null,
    mascotas: {
        nombre: "Cachetes"
    }
}; // object


console.log("edad", typeof edad);
console.log("edadString", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado); // boolean
console.log("hijos", typeof hijos); // object
console.log("dato valor", dato); // undefined
console.log("dato tipo", typeof dato); // undefined
console.log("fechaNacimiento", typeof fechaNacimiento); // object


console.log(adrian.mascotas.nombre);
console.log(adrian);
delete adrian.hijo;
console.log(adrian);
adrian.hija = {
    nombre:'????'
};

console.log(adrian.abuelo);

if(true){
    console.log("Si") //X
}else{
    console.log("No")
}

if(false){
    console.log("Si")
}else{
    console.log("No") //
}

if(1){ // Truthy
    console.log("Si")
}else{
    console.log("No")
}

if(0){ // Falsy
    console.log("Si")
}else{
    console.log("No")
}

if(-1){ // Truthy
    console.log("Si")
}else{
    console.log("No")
}

if(""){ // Falsy
    console.log("Si")
}else{
    console.log("No")
}

if("a"){ // Truthy
    console.log("Si")
}else{
    console.log("No")
}


if(null){ // Falsy
    console.log("Si")
}else{
    console.log("No")
}

if({nombre:'adrian'}){ // Truthy
    console.log("Si")
}else{
    console.log("No")
}

if(new Date()){ // Truthy
    console.log("Si")
}else{
    console.log("No")
}


if(undefined){ // Falsy
    console.log("Si")
}else{
    console.log("No")
}