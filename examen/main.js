var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const filter = require('rxjs/operators').filter;
const tiposPokemon = [];
const habilidadesPokemon = [];
const movimientosPokemos = [];
const tipos = [];
const abecedatio = ["a", "b", "c"];
function inicialiarBDD() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject({
                    mensaje: 'esta mal leido'
                });
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const iniciarBDD$ = rxjs.from(inicialiarBDD());
        iniciarBDD$
            .subscribe(res => {
            res.bdd.forEach(element => {
                element.types.forEach(tipo => {
                    const typePokemon = {
                        tipo: tipo.type.name
                    };
                    tiposPokemon.push(typePokemon);
                });
            });
            console.log(tiposPokemon);
        });
    });
}
function obtenerHabilidades() {
    const iniciarBDD$ = rxjs.from(inicialiarBDD());
    iniciarBDD$
        .subscribe(res => {
        res.bdd.forEach(element => {
            element.abilities.forEach(habilidad => {
                const habilidadPokemon = {
                    habilidad: habilidad.ability.name
                };
                habilidadesPokemon.push(habilidadPokemon);
            });
        });
        console.log(habilidadesPokemon);
    });
}
function obtenerMovimientos() {
    const iniciarBDD$ = rxjs.from(inicialiarBDD());
    iniciarBDD$
        .subscribe(res => {
        res.bdd.forEach(element => {
            element.moves.forEach(movimiento => {
                const movePokemon = {
                    tipo: movimiento.move.name
                };
                movimientosPokemos.push(movePokemon);
            });
        });
        console.log(movimientosPokemos);
    });
}
// function filtrarPorTipos(){
//     const bddLeida$ = rxjs.from(leerBDDP());
//     return bddLeida$
//         .pipe(
//             mergeMap(
//                 (respuestaBDD: RespuestaLeerBDDpokemon) => {
//                     if (respuestaBDD.bdd) {
//                         return rxjs
//                             .from(inquirer.prompt(preguntaUsuarioPokemon))
//                             .mergeMap(rxjs.from(leerBDD),
//                             filter((pokemon: Pokemon)  => 
//                             respuestaBDD.bdd.pokemon.types === "tipo")
//                             );
//                     } else {
//                         // crear la base
//                         return rxjs
//                             .from(crearBDD());
//                     }
//                 }
//             ),
//         );
// }
// function filtrarPorHabilidad(){
//     const bddLeida$ = rxjs.from(leerBDDP());
//     return bddLeida$
//         .pipe(
//             mergeMap(
//                 (respuestaBDD: RespuestaLeerBDDpokemon) => {
//                     if (respuestaBDD.bdd) {
//                         return rxjs
//                             .from(inquirer.prompt(preguntaUsuarioPokemon))
//                             .mergeMap(rxjs.from(leerBDD),
//                             filter((pokemon: Pokemon)  => 
//                             respuestaBDD.bdd.pokemon.abilities === 'grass')
//                             );
//                     } else {
//                         // crear la base
//                         return rxjs
//                             .from(crearBDD());
//                     }
//                 }
//             ),
//         );
//}
// function filtrarPorMovimiento(){
//     const bddLeida$ = rxjs.from(leerBDDP());
//     return bddLeida$
//         .pipe(
//             mergeMap(
//                 (respuestaBDD: RespuestaLeerBDDpokemon) => {
//                     if (respuestaBDD.bdd) {
//                         return rxjs
//                             .from(inquirer.prompt(preguntaUsuarioPokemon))
//                             .mergeMap(rxjs.from(leerBDD),
//                             filter((pokemon: Pokemon)  => 
//                             respuestaBDD.bdd.pokemon.moves === 'cut')
//                             );
//                     } else {
//                         // crear la base
//                         return rxjs
//                             .from(crearBDD());
//                     }
//                 }
//             ),
//         );
// }
function compararABC() {
    const iniciarBDD$ = rxjs.from(inicialiarBDD());
    iniciarBDD$
        .subscribe(res => {
        res.bdd.forEach(element => {
            element.abilities.forEach(name => {
                if (name.substr(1) === abecedatio.forEach) {
                }
            });
        });
        console.log(habilidadesPokemon);
    });
}
function leerBDDP() {
    return new Promise((resolve) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function crearNuevoPokemon() {
    const bddLeida$ = rxjs.from(leerBDDP());
    return bddLeida$
        .pipe(mergeMap((respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs
                .from(inquirer.prompt(preguntaUsuarioPokemon))
                .mergeMap(rxjs.from(leerBDD), map((pokemon) => {
                respuestaBDD.bdd.pokemon.push(pokemon);
                return respuestaBDD;
            }));
        }
        else {
            // crear la base
            return rxjs
                .from(crearBDD());
        }
    }));
}
main();
const preguntaUsuarioPokemon = [
    {
        type: 'input',
        name: 'abilities',
        message: 'abilities'
    },
    {
        type: 'input',
        name: 'base_experience',
        message: 'base_experience'
    },
    {
        type: 'input',
        name: 'game_indices',
        message: 'game_indices'
    },
    {
        type: 'input',
        name: 'height',
        message: 'height'
    },
    {
        type: 'input',
        name: 'held_items',
        message: 'held_items'
    }, {
        type: 'input',
        name: 'height',
        message: 'height'
    }, {
        type: 'input',
        name: 'id',
        message: 'id'
    }, {
        type: 'input',
        name: 'moves',
        message: 'moves'
    }, {
        type: 'input',
        name: 'stats',
        message: 'stats'
    },
];
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
const preguntaMenu2 = {
    type: 'list',
    name: 'opcionMenu2',
    message: 'Que desea crear',
    choices: [
        'Usuario',
        'Localidad Geografica',
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
// function main() {
//     console.log('Empezo');
//     inicializarBase()
//         .pipe(
//             preguntarOpcionesMenu(),
//             preguntarDatos(),
//             actualizarBDD()
//         )
//         .subscribe(
//             (respuesta) => {
//                 console.log(respuesta);
//             },
//             (error) => {
//                 console.log(error);
//             },
//             () => {
//                 console.log('complete');
//                 main();
//             }
//         );
//     // ------- 1) Si existe el archivo, leer, sino crear
//     // ------- 2) Pregunto que quiere hacer -> Crear Borrar Actualizar Buscar
//     // ------- 3) Preguntar los datos -> Datos nuevo Registro
//     // ------- 4) Accion!
//     // ------- 5) Guardar la Base de Datos
// }
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function crearBDD() {
    const contenido = '{"usuarios":[],"sectores":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('data.json', contenido, (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando bdd',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function guardarBDD(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('data.json', JSON.stringify(bdd), (err) => {
            if (err) {
                reject({
                    mensaje: 'Error guardando la BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd
                });
            }
        });
    });
}
main();
