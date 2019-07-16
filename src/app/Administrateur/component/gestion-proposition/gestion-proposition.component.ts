import { Component, OnInit } from '@angular/core';
import { PropositionService } from 'src/app/Core/service/proposition.service';
import { Proposition } from 'src/app/Core/models/proposition';

@Component({
  selector: 'app-gestion-proposition',
  templateUrl: './gestion-proposition.component.html',
  styleUrls: ['./gestion-proposition.component.css']
})
export class GestionPropositionComponent implements OnInit {
  public propositions : Proposition[];
  public errorMsg;
  public token : string = localStorage.getItem('token');
  constructor(private _propositionService : PropositionService) {
    this._propositionService.getAllPropositions().subscribe(propositions => {
      this.propositions = propositions;
    })
  }

  ngOnInit() {
  }

}
