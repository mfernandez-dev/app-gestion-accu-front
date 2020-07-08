import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospital';
import { Observable, of } from 'rxjs';
import { HOSPITALES } from './hospitales-mock';
import { ASOCIADOS } from 'src/app/asociados/services/asociados-mock';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor() { }

  getHospitalesList(): Observable<Hospital[]> {
    return of(HOSPITALES);
  }

  getHospitalById(idHospital: string): Observable<Hospital> {
    return of(HOSPITALES).pipe(
      delay(2000),
      map(datos => {
        const hospitales = datos.filter(hospital => hospital.id === idHospital);
        return hospitales[0];
      })
    );
  }
}
