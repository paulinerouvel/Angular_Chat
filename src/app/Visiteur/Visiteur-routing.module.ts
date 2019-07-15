import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const assoRoutes: Routes = [
  //{ path: 'boutique-asso',  component: BoutiqueAssoComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(assoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VisiteurRoutingModule { }