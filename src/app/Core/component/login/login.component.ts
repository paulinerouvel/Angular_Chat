import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Core/models/utilisateur';
import { UtilisateurService } from '../../service/Utilisateur.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : Utilisateur = new Utilisateur(-1, "", "", "", "", "");
  allUsers :Utilisateur[] = [];
  isConnected = false;

  constructor(private _utilisateurService : UtilisateurService, private _storageService : StorageService,
    private _router : Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    
    this.allUsers  = await this._utilisateurService.getAllUtilisateurs().toPromise();

    
    this.allUsers.forEach(a=>{
      if(a.mail == this.userModel.mail && a.mdp == this.userModel.mdp){
        this.isConnected = true;
        this._storageService.setItem("tokenID", a.id);
        this._storageService.setItem("tokenType", a.type);
      }
    });


    if(this.isConnected == true){

      if(this.userModel.type == "Administrateur"){
        this._router.navigateByUrl('/admin');
      }else{
        this._router.navigateByUrl('/boutique');
      } 
    } 
  }


  logOut(){
    
  }
}
