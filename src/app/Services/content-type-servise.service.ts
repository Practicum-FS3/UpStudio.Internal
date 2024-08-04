import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ContentType } from '../Models/ContentType.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContentTypeServiseService{
  apiUrl: string = "/api/ContentType";

  constructor(public _http: HttpClient) { }

  getAllContentType(): Observable<ContentType[]> {
    return this._http.get<ContentType[]>(this.apiUrl);
  }

  deleteContentType(id:number):Observable<void>{
    return this._http.delete<void>(`${this.apiUrl}/${id}`)
  }

  addContentType(ct:ContentType) : Observable<ContentType>
  {
    console.log(ct);
    
    return this._http.post<ContentType>(`${this.apiUrl}`, ct)
  }

  updateC(id: number,ct:ContentType): Observable<ContentType> {
    return this._http.put<ContentType>(`${this.apiUrl}/${id}`,ct);
  }

  getContentTypeById(id: number): Observable<ContentType> {
    return this._http.get<ContentType>(`${this.apiUrl}/${id}`);
}
}
