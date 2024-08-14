import { HttpClient } from "@angular/common/http";
import { Trainer } from "../Models/trainer.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainerService {
    private baseUrl = "https://localhost:7101"

    reload: any;
    constructor(private _http: HttpClient) {

    }

    getTrainerFromServer(): Observable<Trainer[]> {
        return this._http.get<Trainer[]>(`${this.baseUrl}${'/getAllTrainers'}`);
    }
    // getTrainerById(id: number): Observable<Trainer> {
    //     return this._http.get<Trainer>(`${this.apiUrl}/${id}`);
    // }
}