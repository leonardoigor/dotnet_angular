import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  title: string = 'Alunos';
  alunos: { id: number; nome: string; sobrenome: string; tel: number }[] = [
    { id: 1, nome: 'Marta', sobrenome: 'quem', tel: 0 },
    { id: 2, nome: 'Paula', sobrenome: 'guedes', tel: 0 },
    { id: 3, nome: 'Laura', sobrenome: 'Almeida', tel: 0 },
    { id: 4, nome: 'Luiza', sobrenome: 'Sonssa', tel: 0 },
    { id: 5, nome: 'Lucas', sobrenome: 'Alberto', tel: 0 },
  ];
  public selectedAluno!: string | null;

  alunoSelect(aluno: any) {
    this.selectedAluno = aluno;
  }
  UnSelect() {
    this.selectedAluno = null;
  }
  constructor() {}
  ngOnInit() {}
}
