import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospital';
import { Observable, of } from 'rxjs';
import { HOSPITALES } from './hospitales-mock';
import { ASOCIADOS } from 'src/app/asociados/services/asociados-mock';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private http: HttpClient) { }

  getHospitalesList(): Observable<any> {
    // return of(HOSPITALES);
    return this.http.get('http://localhost:8080/hospitales');
  }

  getHospitalById(idHospital: string): Observable<any> {
    // return of(HOSPITALES).pipe(
    //   delay(2000),
    //   map(datos => {
    //     const hospitales = datos.filter(hospital => hospital.id === idHospital);
    //     return hospitales[0];
    //   })
    // );
    return this.http.get(`http://localhost:8080/hospital/${idHospital}`);
  }
}
