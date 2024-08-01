import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { TrainingType } from "../Models/trainingType.model";

@Injectable()
export class TrainingTypeService {
    apiUrl: string = "api/TrainingType";
    constructor(private _http: HttpClient) {}

    getTrainingTypeById(id: number): Observable<TrainingType[]> {
        return this._http.get<TrainingType[]>(`${this.apiUrl}/${id}`);
    }
   
}
