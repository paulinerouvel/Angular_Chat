import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

constructor() { }

getAllUtilisateurs(token : string) : Observable<any>{

  return undefined;
}


deleteUtilisateur(token : string, id : string) : Observable<any>{

  
  return undefined;
}
}
