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
    return this.http.get('http://localhost:8080/asociados');
  }

  getAsociadoById(idAsociado: string): Observable<any> {

    return this.http.get(`http://localhost:8080/asociado/${idAsociado}`);
  }

  postNewAsociado(asociado: Asociado): Observable<Object> {
    return this.http.post('http://localhost:8080/asociados/newAsociado', asociado);
  }

  updateAsociado(idAsociado: string, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/asociados/${idAsociado}`, value);
  }

  removeAsociado(idAsociado: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/asociados/${idAsociado}/remove`, {responseType: 'text'});
  }
}
