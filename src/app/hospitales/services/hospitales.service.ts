import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospital';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  private baseUrl = 'http://localhost:8080/accugest/api/v1';

  constructor(private http: HttpClient) { }

  getHospitalesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hospitales`);
  }

  getHospitalById(idHospital: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/hospital/${idHospital}`);
  }
}
