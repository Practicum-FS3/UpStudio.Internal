import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { TrainingCustomer } from "../Models/trainingCustomer.model";

@Injectable()
export class TrainingCustomerService {
    apiUrl: string = "api/TraningCustomer";
    constructor(private _http: HttpClient) {}

   getAllTC():Observable<Array<TrainingCustomer>>{
    return this._http.get<Array<TrainingCustomer>>(`${this.apiUrl}/allCT`)

}
    getTrainingByCustomerId(id: number): Observable<TrainingCustomer[]> {
        return this._http.get<TrainingCustomer[]>(`${this.apiUrl}/byCustomerId/${id}`);
    }
    updateTC(tc:TrainingCustomer):Observable<TrainingCustomer>{
        
        return this._http.put<TrainingCustomer>(`${this.apiUrl}/${tc.id}`,tc,
          {headers: { 'content-type': "application/json" }}
        )
      }
      deleteTC(id:number):Observable<Object>{
        return this._http.delete(`${this.apiUrl}/delete/${id}`)
      }
      
}
