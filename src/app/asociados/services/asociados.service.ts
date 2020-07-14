import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Asociado } from '../models/asociado';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsociadosService {
  private baseUrl = 'http://localhost:8080/accugest/api/v1';

  constructor(private http: HttpClient) { }

  getAsociadosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/asociados`);
  }

  getAsociadoById(idAsociado: string): Observable<any> {

    return this.http.get(`${this.baseUrl}/asociado/${idAsociado}`);
  }

  postNewAsociado(asociado: Asociado): Observable<Object> {
    return this.http.post(`${this.baseUrl}/asociados/newAsociado`, asociado);
  }

  updateAsociado(idAsociado: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/asociados/${idAsociado}`, value);
  }

  removeAsociado(idAsociado: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/asociados/${idAsociado}/remove`, {responseType: 'text'});
  }
}
