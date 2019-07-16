import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Core/models/utilisateur';
import { UtilisateurService } from '../../service/Utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : Utilisateur = new Utilisateur(-1, "", "", "", "", "");
  allUsers :Utilisateur[] = [];

  constructor(private _utilisateurService : UtilisateurService) { }

  ngOnInit() {
  }

  async onSubmit(){
    
    this.allUsers  = await this._utilisateurService.getAllUtilisateurs().toPromise();

    this.allUsers.forEach(a=>{
      if(a.mail == this.userModel.mail && a.mdp == this.userModel.mdp){

      }
    });


    


  }
}
