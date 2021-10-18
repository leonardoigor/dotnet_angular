import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  routesLink: { name: string; link: string }[] = [
    { name: 'Professores', link: 'professor' },
    { name: 'Alunos', link: 'alunos' },
    { name: 'Perfil', link: 'perfil' },
    { name: 'DashBoard', link: 'dashboard' },
  ];
  ngOnInit() {}
}
