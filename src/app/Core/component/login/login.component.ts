import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/Core/models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : Utilisateur = new Utilisateur(-1, "", "", "", "", "");

  constructor() { }

  ngOnInit() {
  }
}
