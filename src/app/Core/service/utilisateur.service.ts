import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from 'selenium-webdriver/http';
import { ConstantesService } from './constantes.service';
import { Observable, throwError } from 'rxjs';
import { Chats } from '../models/chat';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private constanteService : ConstantesService) { }

  getAllUtilisateurs(): Observable<any> {
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
