import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raza } from 'src/app/interfaces/rasa';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class RazaRestService {
  nombreModelo = '/Raza';

  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Raza[]> {
    const razas$ = this._httpClient.get(environment.url + this.nombreModelo)
    .pipe(map(respuesta => {
      return <Raza[]>respuesta
    }));
    return razas$;
  }
  delete(id: number): Observable<Raza> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Raza> r)); // Castear
  }


}

//   findAll(): Observable<Raza[]> {
//     const razas$ = this._httpClient.get(environment.url + this.nombreModelo)
//       .pipe(map(respuesta => {
//         return <Raza[]>respuesta));

//     return razas$;
//   }





// delete(id:number):Observable<Raza>{
//   return this._httpClient.delete(environment.url + this.nombreModelo+`/${id}`).pipe(map(r=><Raza> r));
// }

// }