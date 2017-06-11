import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AlunosService } from "app/alunos/alunos.service";
import { ActivatedRoute } from "@angular/router";
import { IFormCanDeactivate } from "app/guards/form.candeactivate";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if (this.formMudou) {
      confirm('Tem certezaque deseja sair dessa página');
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }
}
