import { DashBoardComponent } from './../DashBoard/DashBoard.component';
import { PerfilComponent } from './../Perfil/Perfil.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosComponent } from '../Alunos/Alunos.component';
import { ProfessoresComponent } from '../Professores/Professores.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    AlunosComponent,
    PerfilComponent,
    DashBoardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
