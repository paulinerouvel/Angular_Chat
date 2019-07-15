import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Core/component/home/home.component';
import { MenuAdminComponent } from './Administrateur/component/menu-admin/menu-admin.component';
import { GestionPropositionComponent } from './Administrateur/component/gestion-proposition/gestion-proposition.component';
import { GestionUtilisateurComponent } from './Administrateur/component/gestion-utilisateur/gestion-utilisateur.component';
import { BoutiqueComponent } from './Visiteur/component/boutique/boutique.component';
import { AddChatComponent } from './Visiteur/component/add-chat/add-chat.component';
import { MesCommandesComponent } from './Visiteur/component/mes-commandes/mes-commandes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Core/component/header/header.component';
import { FooterComponent } from './Core/component/footer/footer.component';
import { LoginComponent } from './Core/component/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuAdminComponent,
    GestionPropositionComponent,
    GestionUtilisateurComponent,
    BoutiqueComponent,
    AddChatComponent,
    MesCommandesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
