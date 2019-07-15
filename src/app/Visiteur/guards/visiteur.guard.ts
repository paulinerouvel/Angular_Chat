import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { StorageService } from 'src/app/Core/service/storage.service';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class VisiteurGuard implements  CanActivate{

  constructor(private _storageService: StorageService, private _router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let data = this._storageService.getItem("token");

    if (data != undefined) {
      let token_decoded = jwt_decode(data);
      if (token_decoded["type"] == 1) {
        return true;
      }
    }

    this._router.navigateByUrl('/home');
    return false;



  }
  
}
