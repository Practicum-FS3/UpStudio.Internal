import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HMO } from '../Models/HMO.model';

@Injectable({
  providedIn: 'root'
})
export class HMOsService {

  apiUrl: string = "/api/HMO";
  constructor(public _http: HttpClient) { }

  getAllHMO(): Observable<HMO[]> {
    return this._http.get<HMO[]>(`${this.apiUrl}/GetAll`);
  }

  deleteHMO(id: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/Delete/${id}`)
  }

  addHMO(hmo: HMO): Observable<HMO> {
    return this._http.post<HMO>(`${this.apiUrl}/Add`, hmo)
  }

  updateHMO(id: number, hmo: HMO): Observable<boolean> {
    return this._http.put<boolean>(`${this.apiUrl}/Update/${id}`, hmo);
  }

  getHMOById(id: number): Observable<HMO> {
    return this._http.get<HMO>(`${this.apiUrl}/GetById/${id}`);
  }

}
