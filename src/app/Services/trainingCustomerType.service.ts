import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { TrainingCustomerType } from "../Models/trainingCustomerType.model";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TrainingCustomerTypeService {
  private baseUrl = "https://localhost:7101/api"

  apiUrl: string = "/api/TrainingCustomersTypes";
  reload: any;
  constructor(private _http: HttpClient) {
  }
  getTrainingCustomerTypeFromServer(): Observable<TrainingCustomerType[]> {
    console.log("hgfdfghjhgfghjhgfghjkjhgfdfghjhgfd:    "+this._http.get<TrainingCustomerType[]>(`${this.apiUrl}/TrainingCustomersTypes/allTCT`));
    
    return this._http.get<TrainingCustomerType[]>(`${this.baseUrl}${'/TrainingCustomersTypes/allTCT'}`)
  }
  getTrainingCustomerTypeById(id: number): Observable<TrainingCustomerType> {
    console.log(id);
    
    return this._http.get<TrainingCustomerType>(`${this.baseUrl}/TrainingCustomersTypes/${id}`);
  }

  addTrainingCustomer(trainingData: any): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/TrainingCustomersTypes/addTrainingCustomerType`, trainingData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred:';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = error.error.message;
    } else {
      // Server-side errors
      errorMessage = error.error.message;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}