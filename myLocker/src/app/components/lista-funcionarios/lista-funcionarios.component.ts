import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'
import { Funcionario } from '../../models/funcionario'

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  myFuncionario : Funcionario[]

  constructor(private listServ :FuncionarioService) { }

  

  ngOnInit(): void {
    this.myFuncionario = this.listServ.getFuncionario()
    console.log("my funcionario : " , this.myFuncionario)
  }

  deleteFuncionario(_id) {
    this.listServ.deleteFuncionario(_id);
  }

  getPositions(_id) {
    this.sendPosition.emit(_id)

  }



}
