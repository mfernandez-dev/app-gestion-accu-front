import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asociado } from '../models/asociado';
import { ASOCIADOS } from './asociados-mock';

@Injectable({
  providedIn: 'root'
})
export class AsociadosService {

  constructor() { }

  getAsociadosList(): Observable<Asociado[]> {
    return of(ASOCIADOS);
  }
}
