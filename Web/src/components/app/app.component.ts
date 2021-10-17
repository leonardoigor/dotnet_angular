import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  routesLink: { name: string; link: string }[] = [
    { name: 'Professores', link: 'professor' },
    { name: 'Alunos', link: 'alunos' },
    { name: 'Perfil', link: 'perfil' },
    { name: 'DashBoard', link: 'dashboard' },
  ];
}
