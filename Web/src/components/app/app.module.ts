import { NavComponent } from './../Nav/Nav.component';
import { DashBoardComponent } from './../DashBoard/DashBoard.component';
import { PerfilComponent } from './../Perfil/Perfil.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosComponent } from '../Alunos/Alunos.component';
import { ProfessoresComponent } from '../Professores/Professores.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from '../Title/Title.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    AlunosComponent,
    PerfilComponent,
    DashBoardComponent,
    NavComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BsDropdownModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
