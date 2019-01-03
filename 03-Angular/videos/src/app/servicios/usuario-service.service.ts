import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {
  usuarios: UsuarioInterface[] = [
    {
      id: 1,
      nombre: "Paul"
    },
    {
      id: 2,
      nombre: "Esteban"
    }
  ];
  constructor() { }
  registro_Actual = 3;

  crear(nuevousuario: UsuarioInterface) {
    nuevousuario.id = this.registro_Actual;
    this.usuarios.push(nuevousuario);
    this.registro_Actual++;
    return nuevousuario;
  }
  eliminar(id: number) {
    const indiceUsuario = this.usuarios.findIndex((usuario) => {
      return usuario.id === id;
    });
    const usuarioBorrado = JSON.parse(JSON.stringify(this.usuarios[indiceUsuario]));
    this.usuarios.splice(indiceUsuario, 1);
    return usuarioBorrado;
  }

  actualizar(id: number, usuarioActualizado: UsuarioInterface) {

    const indiceUsuario = this.usuarios.findIndex((usuario) => {
      return usuario.id === id;
    });
    this.usuarios[indiceUsuario] = usuarioActualizado;
    return usuarioActualizado;
  }
  buscarPorId(id: number) {

    return this.usuarios.find((usuario) => usuario.id === id)
  }


}

export interface UsuarioInterface {
  nombre?: string;
  id?: number
}