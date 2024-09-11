// import { Injectable } from "@angular/core";
// import { SubscriptionType } from "../Models/SubscriptionType";
// import { HttpClient } from "@angular/common/http";
// import { Observable, catchError, throwError } from "rxjs";
// @Injectable()
// export class SubscriptionService {
//   lstSubs: SubscriptionType[] = [];
//   // [
//   //     { id:1,title:"מנוי אישי קלאסי לפעם בשבוע",isActive:true,numberOfTrainingPerWeek:1,priceForTraining:40,totalTraining:8,description:"למי שרוצה לשמר את הכושר שלה, לא רוצה להתחייב לתקופה ארוכה, ואוהבת יום ושבוע קבועים"},
//   //     { id:2,title:"מנוי אישי חצי שנתי לפעם בשבוע",isActive:true,numberOfTrainingPerWeek:1,priceForTraining:37.5,totalTraining:24,description:"למי שרוצה לשמר את הכושר שלה לאורך זמן ואוהבת יום ושעה קבועים. מעדיפה מחיר מוזל"},
//   //     { id:3,title:"מנוי אישי שנתי לפעם בשבוע",isActive:true,numberOfTrainingPerWeek:1,priceForTraining:35,totalTraining:48,description:"למי שרוצה לשמר את הכושר שלה לאורך זמן, ואין לה בעיה להתחייב לתקופה ארוכה ורוצה לקבל הנחה משמעותית במחיר! "}]
//   cols: string[] = ["סוג מנוי", "מס' אימונים", "עלות לאימון", "מחיר כולל", "למי מיועד"];
//   constructor(private _http: HttpClient) { }
//   AddNewSubscription(sub: SubscriptionType):Observable<any> {
//     console.log('add new sub', sub);
//     return this._http.post("/api/subscriptionType", sub).pipe(
//     catchError(error=>{
//       console.error('An error occurred:', error);
//       return throwError('Something went wrong; please try again later.');
//     })
//   )
//   };
// GetAllSubscriptions(): Observable < SubscriptionType[] > {
//   return this._http.get<SubscriptionType[]>("/api/subscriptionType");
// }
// }