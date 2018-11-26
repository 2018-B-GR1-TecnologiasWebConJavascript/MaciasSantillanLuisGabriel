
// const Component = require('@angular/core').Component
import {Component} from '@angular/core'; // TS
import {} from 'http-server'; //Js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) // Decorador
export class AppComponent {

  // @OtroDecorador()

  title = 'videos';


  /*
  @DecoradorMetodo()
  metodo(
    @Propiedad() nombre:string
  ){

  }
  */
}
