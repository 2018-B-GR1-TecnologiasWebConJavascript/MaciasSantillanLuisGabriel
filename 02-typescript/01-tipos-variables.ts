// 01-tipo-variables.ts

let edad: number | string = 13;
edad = 25;
edad = 'Nombre';

let variableLoca: any = '';
variableLoca = false;

let nombre: string = 'Adrian';
// duck typing ->
let casado = false;
casado = true;
casado = false;
casado = null;
casado = undefined;

let adrian: { // Interface
    nombre: string;
    apellido?: string;
} = { // JSON
    nombre: 'Carmita',
    apellido: 'Sarzosa'
};

let fechaNacimiento: Date = new Date();

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

let numeros: number[] = [1, 2, 3, 4];


function saludar(
    nombre: string, // REQUERIDOS
    apellido?: string,  // OPCIONALES
    ...otrosNombres: string[]): string | number { // INFINITOS
    return '';
}

let respuestaSaludar = <string> saludar('Vicente', 'Eguez', '', '', '', '');

//respuestaSaludar = 1;
respuestaSaludar = '';

const saludo = (nombre: string): number => {
    return 1;
};


class Usuario {
    protected edad: string;
    nombre;

    constructor() {

    }

    private saludar(nombre: string): string {
        return nombre;
    }
}

const adrianInstancia = new Usuario();

interface UsuarioInterface{
    nombre:string;
    apellido?:string;
}

class UsuarioDummy{
    nombre:string;
    apellido?:string;
}

const vicente:UsuarioDummy = {
    nombre:'Vicente',
    apellido:'Eguez'
};






