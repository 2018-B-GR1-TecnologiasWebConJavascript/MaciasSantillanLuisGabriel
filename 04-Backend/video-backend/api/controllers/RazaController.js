/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//http://localhost:1337/Raza/holaMundo


module.exports = {
  holaMundo: (peticion, respuesta) => {
    return respuesta.send('ok');
  },
  buscarPorNombre: async (req, res) => {

    const parametros=req.allParams;
    //tener acceso a todos los modelos 
    var nombreCac = await Raza.find({
      nombre: { 'startsWith': parametros.nombre }
    });
    return res.ok(nombreCac);

  }

};

