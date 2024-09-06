import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { TrainingCustomer } from "../Models/trainingCustomer.model";

@Injectable()
export class TrainingCustomerService {
    apiUrl: string = "api/TrainingCustomer";
    constructor(private _http: HttpClient) {}

    getTrainingByCustomerId(id: number): Observable<TrainingCustomer[]> {
        return this._http.get<TrainingCustomer[]>(`${this.apiUrl}/GetTraningCustomerByCustomerId/${id}`);
    }
   
}
