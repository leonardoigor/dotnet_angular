import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  constructor() { }
  title:string='Alunos'
   alunos:{nome:string}[]=[
     {nome:"Marta"},
     {nome:'Paula'},
     {nome:'Laura'},
     {nome:'Luiza'},
     {nome:'Lucas'}
   ]
  ngOnInit() {
  }

}
