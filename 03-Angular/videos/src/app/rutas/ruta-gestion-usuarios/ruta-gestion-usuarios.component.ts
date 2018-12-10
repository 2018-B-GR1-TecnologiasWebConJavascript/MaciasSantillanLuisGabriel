import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {


  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'gabriel'
    }, {
      id: 2,
      nombre: 'Luis'
    }
  ]

  constructor() { }


  ngOnInit() {
  }

  hola(){
    return 'hola';
  }

  imprimir(usuario:Usuario){
    console.log(usuario);
    const indiceUsuarioAEliminar= this.usuarios.findIndex(
      (usuarioABusacar)=>{
        return usuarioABusacar.id===usuario.id;
      }
    );
    this.usuarios.splice(indiceUsuarioAEliminar,1)
  }

}

interface Usuario {
  nombre?: string;
  id?: number;
}