import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Core/component/home/home.component';
import { LoginComponent } from './Core/component/login/login.component';
import { MenuAdminComponent } from './Administrateur/component/menu-admin/menu-admin.component';
import { GestionPropositionComponent } from './Administrateur/component/gestion-proposition/gestion-proposition.component';
import { BoutiqueComponent } from './Visiteur/component/boutique/boutique.component';
import { MesCommandesComponent } from './Visiteur/component/mes-commandes/mes-commandes.component';
import { GestionUtilisateurComponent } from './Administrateur/component/gestion-utilisateur/gestion-utilisateur.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"admin", component: MenuAdminComponent},
  {path:"boutique", component: BoutiqueComponent},
  {path:"mesCommandes", component: MesCommandesComponent},
  {path:"admin", component: MenuAdminComponent},
  {path:"admin", component: MenuAdminComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
