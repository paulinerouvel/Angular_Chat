import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionPropositionComponent } from './component/gestion-proposition/gestion-proposition.component';
import { GestionUtilisateurComponent } from './component/gestion-utilisateur/gestion-utilisateur.component';
import { MenuAdminComponent } from './component/menu-admin/menu-admin.component';
@NgModule({
  declarations: [GestionUtilisateurComponent, GestionPropositionComponent, MenuAdminComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AdministrationModule { }