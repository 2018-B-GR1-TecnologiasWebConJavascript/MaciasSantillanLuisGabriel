/**
 * Raza.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    mascotas: {
      collection: 'Mascota',// modelo hijo
      via: 'idRaza'//nombre del campo con el cual vamos a relacionar del padre
    }
  },

};

