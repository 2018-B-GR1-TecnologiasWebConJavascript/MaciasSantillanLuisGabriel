import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/servicios/usuario-service.service';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {
  usuarios=[];

//inyeccion de depencdencias 
// no son como cualquier clase normal, el constructor instancia el componente

  constructor(
    private readonly _usuarioService:UsuarioServiceService
  ) {
    
   }


  ngOnInit() {
    //cuando esta listo el web component para mostrarse
    this.usuarios=this._usuarioService.usuarios;
  }

  // hola(){ DOLO DERVIA PARA PROBAR 
  //   return 'hola';
  // }

  eliminar(usuario:Usuario){
    //console.log(usuario);
    this._usuarioService.eliminar(usuario.id);
    
   
  }

}

interface Usuario {
  nombre?: string;
  id?: number;
}