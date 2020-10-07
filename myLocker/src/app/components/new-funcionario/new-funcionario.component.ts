import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'
@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  myId = 4

  newFuncionario = {
    id: this.myId,
    nome : "",
    cpf : "",
    cargo : "",
    telefone : "",
    setor: ""
  }

  constructor(private listServ: FuncionarioService) { }

  ngOnInit(): void {
  }

  addFuncionario(){
    console.log("datos enviados y funcionando" , this.newFuncionario)
    this.listServ.addFuncionario(this.newFuncionario)
    this.myId ++;
    this.newFuncionario = {
      id: 0,
      nome : "",
      cpf : "",
      cargo : "",
      telefone : "",
      setor: ""
    }

  }

}
