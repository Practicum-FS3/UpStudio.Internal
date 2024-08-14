import { HttpClient } from "@angular/common/http";
import { Training } from "../Models/training.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainingService {

    apiUrl: string = "/api/Training";
    reload: any;
    constructor(private _http: HttpClient) {

    }

    getTrainingFromServer(): Observable<Training[]> {
        return this._http.get<Training[]>(this.apiUrl)

    }
    getTrainingById(id: number): Observable<Training> {
        return this._http.get<Training>(`${this.apiUrl}/${id}`);
    }
    UpdateTrainingById(id: number, training: Training): Observable<Training> {
        return this._http.put<Training>(`${this.apiUrl}/${id}`, training);
    }
    addTraining(training: Training): Observable<Training> {
        return this._http.post<Training>(this.apiUrl, training)
    }
}