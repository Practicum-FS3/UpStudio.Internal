import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { TrainingCustomer } from "../Models/trainingCustomer.model";

@Injectable()
export class CustomerService {
    apiUrl: string = "api/TraningCustomer";

    constructor(private _http: HttpClient) {}

    getCustomertFromServer(id: number): Observable<TrainingCustomer[]> {
        return this._http.get<TrainingCustomer[]>(`${this.apiUrl}/byCustomerId/${id}`);
    }
   
}
