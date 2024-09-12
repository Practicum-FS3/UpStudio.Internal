import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentSection } from '../Models/content-section.module';

@Injectable({
  providedIn: 'root'
})

export class ContentSectionServiseService {
  apiUrl: string = "/api/ContentSection";

  constructor(public _http: HttpClient) { }
  
  // base64ToBlob(base64Data: string, contentType: string): Blob {
  //   const byteCharacters = atob(base64Data);
  //   const byteArrays = [];
  //   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
  //     const slice = byteCharacters.slice(offset, offset + 512);
  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }
  //   return new Blob(byteArrays, { type: contentType });
  // }
  
  getAllContentSection(): Observable<ContentSection[]> {
    return this._http.get<ContentSection[]>(`${this.apiUrl}/GetAllContentSections`);
  }

  // deleteContentSection(id:number):Observable<void>{
  //   return this._http.delete<void>(`${this.apiUrl}/DeleteContentSection/F${id}`)
  // }

  addContentSection(ct: ContentSection): Observable<ContentSection> {
    console.log(ct);
    const formData: FormData = new FormData();

    formData.append('id', ct.id.toString());
    formData.append('section1', ct.section1!);
    formData.append('section2', ct.section2!);
    formData.append('section3', ct.section3!);
    formData.append('isActive', ct.isActive!.toString());
    formData.append('contentTypeID', ct.contentTypeID!.toString());
    formData.append('viewInHP', ct.viewInHP!.toString());

    return this._http.post<ContentSection>(`${this.apiUrl}/CreateContentSection`, formData)
  }


  base64ToBlob(base64: string, contentType: string) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
  
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }
  
  updateC(ct: ContentSection): Observable<ContentSection> {
    const formData: FormData = new FormData();
    // const blob = this.base64ToBlob(ct.image!.data, ct.image!.contentType);

    // הוספת הנתונים ל-FormData
    formData.append('id', ct.id.toString());
    formData.append('section1', ct.section1!);
    formData.append('section2', ct.section2!);
    formData.append('section3', ct.section3!);
    formData.append('isActive', ct.isActive!.toString());
    formData.append('contentTypeID', ct.contentTypeID!.toString());
    formData.append('viewInHP', ct.viewInHP!.toString());

    if (ct.image) {
      debugger
      // if (typeof ct.image === 'string') {
        // const blob = this.base64ToBlob(ct.image.data, 'image/png');  // שים לב להתאים את ה-content type
        // formData.append('fileUploadDTO', blob, 'image.png');
        formData.append('fileName', 'image.png');
        formData.append('contentType', 'image/png');
        formData.append('image', ct.image);
      // }

      // formData.append('image', ct.image, ct.image.name);
    }

    // formData.append('fileUploadDTO', ct.image!.toString());
    // formData.append('fileUploadDTO', ct.image!, ct.image!.name);
    // formData.append('file', blob, ct.image!.fileName);
// console.log(blob);

    return this._http.put<ContentSection>(`${this.apiUrl}/UpdateContentSection`, formData);
  }

  deleteC(id: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/DeleteContentSection/${id}`);
  }

  getContentSectionById(id: number): Observable<ContentSection> {
    return this._http.get<ContentSection>(`${this.apiUrl}/GetContentSectionById/${id}`);
  }

  getContentSectionByContentTypeId(id: number): Observable<ContentSection[]> {
    return this._http.get<ContentSection[]>(`${this.apiUrl}/GetContentSectionsByIdContentType/${id}`);
  }
}
