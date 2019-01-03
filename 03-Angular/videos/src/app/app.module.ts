import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductoComponent } from './rutas/ruta-gestion-producto/ruta-gestion-producto.component';
import { RutaVerDetalleUsuarioComponent } from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';
import { UsuarioServiceService } from './servicios/usuario-service.service';

@NgModule({
  declarations: [// componentes 
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaPerfilComponent,
    RutaMenuComponent,
    Ruta404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductoComponent,
    RutaVerDetalleUsuarioComponent
  ],
  imports: [ // modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsuarioServiceService],  // servicios 
  bootstrap: [AppComponent] // componente principal 
})
export class AppModule { }


/*
* principal
<router outlet></router outlet> se necesita si optiene mas routas, renderiza la ruta
  ->* inicio
  ->* login
  ->* perfil 
  ->* menu 
    <router outlet></router outlet>
    gestion productos
      crear productos
      actualizar productos
    gestion usuarios
      crear usuarios
      actualizar usuarios

    ->* 404 no encontrado, siempre debe tener 
    
 */
