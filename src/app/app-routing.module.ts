import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './Visiteur/component/boutique/boutique.component';

const routes: Routes = [
  {path:"home", component: BoutiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
