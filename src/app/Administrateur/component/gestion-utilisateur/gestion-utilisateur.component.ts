import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Core/models/utilisateur';
import { UtilisateurService } from 'src/app/Core/service/Utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {

  public users : Utilisateur[];
  public errorMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _utilisateurService : UtilisateurService) { 

    this._utilisateurService.getAllUtilisateurs()

  }

  ngOnInit() {
  }

  suppress(){
    //this._utilisateurService.deleteUtilisateur(this.token, id).subscribe(res=>location.reload(), err=> this.errorMsg = err);
  }


}
