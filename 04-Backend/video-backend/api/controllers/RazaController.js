/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//http://localhost:1337/Raza/holaMundo


module.exports = {
  holaMundo:(peticion,respuesta)=>{
      return respuesta.send('ok');
  }

};

