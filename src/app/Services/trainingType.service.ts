import { HttpClient } from "@angular/common/http";
import { TrainingType } from "../Models/TrainingType.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainingTypeService {
    private baseUrl = "https://localhost:7101/api"

    apiUrl: string = "/api/TrainingType";
  reload: any;
    constructor(private _http: HttpClient) {

    }

    getTrainingTypeFromServer(): Observable<TrainingType[]> {        
        return this._http.get<TrainingType[]>(this.baseUrl)

    }  
    getTrainingTypeById(id: number): Observable<TrainingType> {
        return this._http.get<TrainingType>(`${this.baseUrl}/${id}`);
    }
}