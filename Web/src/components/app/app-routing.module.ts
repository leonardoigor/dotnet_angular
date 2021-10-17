import { AlunosComponent } from './../Alunos/Alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from '../Professores/Professores.component';
import { PerfilComponent } from '../Perfil/Perfil.component';
import { DashBoardComponent } from '../DashBoard/DashBoard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'alunos', component: AlunosComponent },
  { path: 'professor', component: ProfessoresComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'dashboard', component: DashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
