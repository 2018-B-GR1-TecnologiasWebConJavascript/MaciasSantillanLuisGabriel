const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

/*
map(  // MODIFICA ALTERA ARREGLO -> NUEVO ARREGLO
    ()=>{
        return {}
    }
)
*/
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};

const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
];
const preguntaUsuarioBuscar = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es el id'
    },
];
const preguntaUsuarioBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario a buscar'
    }
];


const preguntaUsuarioNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];


function main() {
    console.log('Empezo');

    inicializarBase()
        .pipe(
            preguntarOpcionesMenu(),
            preguntarDatos(),
            actualizarBDD()
        )
        .subscribe(
            (respuesta) => {
                console.log(respuesta);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('complete');
                main();
            }
        );

    // ------- 1) Si existe el archivo, leer, sino crear

    // ------- 2) Pregunto que quiere hacer -> Crear Borrar Actualizar Buscar

    // ------- 3) Preguntar los datos -> Datos nuevo Registro

    // ------- 4) Accion!

    // ------- 5) Guardar la Base de Datos


}

function inicializarBase() {

    const bddLeida$ = rxjs.from(leerBDD());

    return bddLeida$
        .pipe(
            mergeMap(  // Respuesta anterior Observable
                (respuestaBDD: RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                        // crear la base

                        return rxjs
                            .from(crearBDD());
                    }

                }
            ),
        );

}

function leerBDD() {
    return new Promise(
        (resolve) => {
            fs.readFile(
                'bdd.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve({
                            mensaje: 'No existe la Base de Datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de datos leida',
                            bdd: JSON.parse(contenidoArchivo)
                        });
                    }
                }
            );
        }
    );
}

function crearBDD() {
    const contenido = '{"usuarios":[],"sectores":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );
        }
    );
}

function guardarBDD(bdd: BaseDeDatos) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                JSON.stringify(bdd),
                (err) => {
                    if (err) {
                        reject({
                            mensaje: 'Error guardando la BDD',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd
                        });
                    }
                }
            );
        }
    );
}

function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs
                .from(inquirer.prompt(preguntaMenu))
                .pipe(
                    map(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                );
        }
    );
}

function preguntarDatos() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            switch (respuesta.opcionMenu.opcionMenu) {
                case 'Crear':
                    return rxjs
                        .from(inquirer.prompt(preguntaUsuario))
                        .pipe(
                            map(
                                (usuario: Usuario) => {
                                console.log(usuario.id);
                                    respuesta.bdd.usuarios.push(usuario);
                                    return respuesta;
                                }
                            )
                        );

                case 'Buscar':
                return rxjs
                        .from(inquirer.prompt(preguntaUsuarioBuscar))
                        .pipe(
                            map(
                                (usuario: Usuario) => {
                                    const usuarioaBuscar=usuario.id;
                                    
                                    const respuestaFind =  respuesta.bdd.usuarios.find((usuario) => {
                        
                                    
                                        return usuario.id === usuarioaBuscar;
                                    });
                               console.log("el nombre del usuario encontrado es: "+respuestaFind.nombre);
                                    return respuesta;
                                }
                            )
                        );
                case 'Borrar':
                    return rxjs
                        .from(inquirer.prompt(preguntaUsuarioBuscar))
                        .pipe(
                            map(
                                (usuario: Usuario) => {
                                    const usuarioaBorrar=usuario.id;
                                    
                                    const idParaEliminar =respuesta.bdd.usuarios.findIndex(
                                        (usuario) => {
                                            return usuario.id == usuarioaBorrar;
                                        }
                                    );
                                    console.log(idParaEliminar);
                                
                                    respuesta.bdd.usuarios.splice(idParaEliminar, 1);
                                    return respuesta;
                                }
                            )
                        );

                case 'Actualizar':
                    return rxjs
                        .from(inquirer.prompt(preguntaUsuario))
                        .pipe(
                            map(
                                (usuario: Usuario) => {
                                    const idUsuarioaActualizar=usuario.id;
                                    const nombreUsuarioaActualizar=usuario.nombre;
                                    
                                    const idParaActializar = respuesta.bdd.usuarios.findIndex(
                                        (usuario) => {
                                            return usuario.id == idUsuarioaActualizar;
                                        }
                                    );


                                    respuesta.bdd.usuarios[idParaActializar].nombre=nombreUsuarioaActualizar;
                                    return respuesta;
                                }
                                )
                            );

                

            }
        }
    );
}

function actualizarBDD() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs.from(guardarBDD(respuesta.bdd));
        }
    );
}


function ejecutarAccion() {
    return map(
        (respuesta: RespuestaLeerBDD) => {
            respuesta.bdd.usuarios.push(respuesta.usuario);
            return respuesta;
        }
    );
}

function anadirUsuario(usuario) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({ mensaje: 'Error leyendo' });
                    } else {
                        const bdd = JSON.parse(contenido);


                        bdd.usuarios.push(usuario);


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({ mensaje: 'Usuario Creado' });
                                }
                            }
                        );
                    }
                });
        }
    );
}

function editarUsuario(nombre, nuevoNombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({ mensaje: 'Error leyendo' });
                    } else {
                        const bdd = JSON.parse(contenido);


                        const indiceUsuario = bdd.usuarios
                            .findIndex(
                                (usuario) => {
                                    return usuario.nombre = nombre;
                                }
                            );

                        bdd.usuarios[indiceUsuario].nombre = nuevoNombre;


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({ mensaje: 'Usuario Editado' });
                                }
                            }
                        );
                    }
                });
        }
    );
}

function buscarUsuarioPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({ mensaje: 'Error leyendo' });
                    } else {
                        const bdd = JSON.parse(contenido);

                        const respuestaFind = bdd.usuarios
                            .find(
                                (usuario) => {
                                    return usuario.nombre === nombre;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

main();


interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    usuario?: Usuario;
}

export interface BaseDeDatos {
    usuarios: Usuario[];
    sectores: Sector[];
}

interface Usuario {
    id: number;
    nombre: string;
}

interface Sector {
    id: number;
    nombre: string;
    idUsuario: number;
}

interface OpcionMenu {
    opcionMenu: 'Crear' | 'Borrar' | 'Actualizar' | 'Buscar';
}













