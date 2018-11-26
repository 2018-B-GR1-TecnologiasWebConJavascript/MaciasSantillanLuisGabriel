// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, "Adrian", "Adrian", 1, true, true, 1, { nombre: 'Adrian' }, 1, [1, 2, 3], new Date());
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
const promesita$ = rxjs.from(promesita(true));
const promesitaNoOk$ = rxjs.from(promesita(true));
numeros$
    .pipe(concat(promesitaNoOk$), // Reject
concat(promesita$))
    .pipe(distinct(), map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
