import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  myFuncionario
  funcionarioFound

  constructor(private listServ : FuncionarioService) { }

  ngOnInit(): void {
  }

  getPositions($event) {
    this.myFuncionario = this.listServ.getOneFuncionario($event)
    this.funcionarioFound = this.myFuncionario
  }

  editFuncionario() {
    this.listServ.editFuncionario(this.funcionarioFound)
  }

}
