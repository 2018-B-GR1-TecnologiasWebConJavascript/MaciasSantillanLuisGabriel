import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/servicios/usuario-service.service';
import { RazaRestService } from 'src/app/servicios/rest/raza-rest.service';
import { Raza } from 'src/app/interfaces/rasa';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {
  usuarios = [];

  //inyeccion de depencdencias 
  // no son como cualquier clase normal, el constructor instancia el componente

  constructor(
    private readonly _razaRestService: RazaRestService
  ) {

  }


  ngOnInit() {
    const razas$ = this._razaRestService.findAll();
    razas$.subscribe((razas: Raza[]) => {
      console.log(razas);
      this.usuarios=razas;
    },

      (error) => {
        console.error('Error',error);
      }
    )
    //cuando esta listo el web component para mostrarse
    //  this.usuarios=this._usuarioService.usuarios;
  }

  // hola(){ DOLO DERVIA PARA PROBAR 
  //   return 'hola';
  // }

  eliminar(raza: Raza) {
    //console.log(usuario);
    // this._usuarioService.eliminar(usuario.id);
    const razaEliminada$=this._razaRestService.delete(raza.id);
    razaEliminada$.subscribe((razaEliminada:Raza)=>{
      console.log('Se elimino:' , razaEliminada);
      const indice= this.usuarios.findIndex((r)=> r.id===raza.id);
      this.usuarios.splice(indice,1);
    },(error) => {
      console.error('Error',error);
    })



  }

}

interface Usuario {
  nombre?: string;
  id?: number;
}