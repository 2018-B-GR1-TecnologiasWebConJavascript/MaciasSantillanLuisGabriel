/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'db_usuario',
// aqui van nombres de atributos y configuracion de cada uno de ellos
  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    apellido:{
      type:'string',
      required:true
    },
    direccionCasa:{
      type:'string',
      columnName:'direccion_casa'
    },
    cedula:{
      type:'string',
      unique:true,
      required:true
    },
    sueldo:{
      type:'number',
      defaultsTo: 394.00
    },
    correoElectronico:{
      type:'string',
      columnName:'correo_electronico',
      isEmail:true
    },
    numeroPropiedades:{
      type:'number',
      defaultsTo: 0,
      columnName:'numero_propiedades',
      min: 0,
      max: 5
    },
    estado:{
      type: 'boolean',
      defaultsTo:true
    },
    roles:{
      type: 'string',
      isIn: ['Administrador','Usuario','Reporte'],
      defaultsTo:'Usuario'
    }
  },

};

