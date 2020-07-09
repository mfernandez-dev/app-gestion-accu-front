import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Asociado } from '../models/asociado';
import { ASOCIADOS } from './asociados-mock';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsociadosService {

  constructor(private http: HttpClient) { }

  getAsociadosList(): Observable<any> {
    // return of(ASOCIADOS);
    return this.http.get('http://localhost:8080/asociados');
  }

  getAsociadoById(idAsociado: string): Observable<Asociado> {
    return of(ASOCIADOS).pipe(
      delay(2000),
      map(datos => {
        const asociados = datos.filter(asociado => asociado.asociadoId === idAsociado);
        return asociados[0];
      })
    );
  }
}
