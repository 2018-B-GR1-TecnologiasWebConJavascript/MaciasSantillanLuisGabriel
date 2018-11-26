// 01-tipo-variables.ts
let edad = 13;
edad = 25;
edad = 'Nombre';
let variableLoca = '';
variableLoca = false;
let nombre = 'Adrian';
// duck typing ->
let casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;
let adrian = {
    nombre: 'Carmita',
    apellido: 'Sarzosa'
};
let fechaNacimiento = new Date();
/*
let promesa: Promise<number> = () => {
    return new Promise(
        (resolve, reject) => {
            resolve(1);
        }
    );
};
*/
console.log(adrian); // undefined
let numeros = [1, 2, 3, 4];
function saludar(nombre, // REQUERIDOS
apellido, // OPCIONALES
...otrosNombres) {
    return '';
}
let respuestaSaludar = saludar('Vicente', 'Eguez', '', '', '', '');
//respuestaSaludar = 1;
respuestaSaludar = '';
const saludo = (nombre) => {
    return 1;
};
class Usuario {
    constructor() {
    }
    saludar(nombre) {
        return nombre;
    }
}
const adrianInstancia = new Usuario();
class UsuarioDummy {
}
const vicente = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};
