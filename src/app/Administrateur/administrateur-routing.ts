import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './component/menu-admin/menu-admin.component';
import { GestionPropositionComponent } from './component/gestion-proposition/gestion-proposition.component';
import { GestionUtilisateurComponent } from './component/gestion-utilisateur/gestion-utilisateur.component';
import { AdministrateurGuard } from './guards/administrateur.guard';


const adminRoutes: Routes = [
  { path: 'admin',  component: MenuAdminComponent},
  { path:"admin/gestion-proposition", component: GestionPropositionComponent, canActivate : [AdministrateurGuard]},
  { path:"admin/gestion-utilisateur", component: GestionUtilisateurComponent, canActivate : [AdministrateurGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrateurRoutingModule { }