import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Trainer } from "../Models/trainer.model";

@Injectable()
export class TrainerService {
    apiUrl: string = "api/TrainerControllers";
    constructor(private _http: HttpClient) {}

    getTrainerById(id: number): Observable<Trainer> {
        return this._http.get<Trainer>(`${this.apiUrl}/getTrainerById/${id}`);
    }
   
}
