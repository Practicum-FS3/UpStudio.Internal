import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { CalanderAvailableTraining } from "../Models/calanderAvailableTraining.model";

@Injectable()
export class CustomerTrainingsDeatailsService {
    apiUrl: string = "api/CustomerTrainingsDetails";
    
    constructor(private _http: HttpClient) {}

    getCustomerTrainingsDeatails(): Observable<CalanderAvailableTraining[]> {
        return this._http.get<CalanderAvailableTraining[]>(`${this.apiUrl}/GetAllCustomerTrainingsAsync`);
    }
   
    filterTrainings(past?: boolean, future?: boolean, startDate?: string, endDate?: string): Observable<CalanderAvailableTraining[]> {
        let params = new HttpParams();

        if (past !== undefined) {
            params = params.set('past', past.toString());
        }
        if (future !== undefined) {
            params = params.set('future', future.toString());
        }
        if (startDate) {
            params = params.set('StratDate', startDate);
        }
        if (endDate) {
            params = params.set('EndDate', endDate);
        }

        return this._http.get<CalanderAvailableTraining[]>(`${this.apiUrl}/FilterCustomersTrainingDeatails`, { params });
    }
}
