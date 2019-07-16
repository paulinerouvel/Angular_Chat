import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { StorageService } from 'src/app/Core/service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurGuard implements  CanActivate{

  constructor(private _storageService: StorageService, private _router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let id = this._storageService.getItem("tokenID");
    let type = this._storageService.getItem('tokenType')

    if (id != undefined && type != undefined) {
      if (type == "Administrateur") {
        return true;
      }
    }

    this._router.navigateByUrl('/home');
    return false;



  }
  
}
