import { Injectable } from "@angular/core";
import { SubscriptionType } from "../Models/SubscriptionType";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, mergeMap, throwError } from "rxjs";

@Injectable()
export class SubscriptionService {

  obsSubscriptions!: Observable<SubscriptionType[]>;
  cols: string[] = ["סוג מנוי", "מס' אימונים", "עלות לאימון", "מחיר כולל", "למי מיועד", "אפשרויות"];
  apiUrl: string = "/api/subscriptionType";

  constructor(private _http: HttpClient) {
    this.obsSubscriptions = this.getAllSubscriptions();
  }

  getAllSubscriptions(): Observable<SubscriptionType[]> {
    console.log("load from service");
    return this._http.get<SubscriptionType[]>(`${this.apiUrl}/GetSubscriptionTypes`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  addNewSubscription(sub: SubscriptionType): Observable<SubscriptionType[]> {
    return this._http.post<SubscriptionType>(`${this.apiUrl}/CreateSubscriptionType`, sub).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      }),
      mergeMap(() => this.getAllSubscriptions())
    );
  }

  updateSubscription(sub: SubscriptionType): Observable<SubscriptionType[]> {
    return this._http.put<void>(`${this.apiUrl}/UpdateSubscriptionType`, sub).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      }),
      mergeMap(() => this.getAllSubscriptions())
    );
  }

  deleteSubscription(id: number): Observable<SubscriptionType[]> {
    console.log('deleteSubscription');
    return this._http.delete<void>(`${this.apiUrl}/DeleteSubscriptionType/${id}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      }),
      mergeMap(() => this.getAllSubscriptions())
    );
  }
}
