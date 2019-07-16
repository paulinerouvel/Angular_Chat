import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConstantesService } from './constantes.service';
import { Chats } from 'src/app/Core/models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, private constanteService : ConstantesService) { }




  getAllChats(): Observable<Array<Chats>> {
    return <Observable<Array<Chats>>>this.http.get(this.constanteService.getConstante('URL_GET_CHATS'));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'The connection to API failed.');
  };
}
