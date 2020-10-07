import { Injectable } from '@angular/core';
import  { Funcionario } from '../models/funcionario';

const FuncionarioList = [
  {
    "id" : 1,
    "nome" : "Isis",
    "cpf" : "064.816.917-02",
    "cargo" : "Gerente" ,
    "telefone" : "99050-8298",
    "setor" : "Maquiagem" 
  },
  {
    "id" : 2,
    "nome" : "Roselino",
    "cpf" : "006.800.900-02",
    "cargo" : "Gerente",
    "telefone" : "99999-9999",
    "setor" : "Informatica"
  },

  {
    "id" : 3,
    "nome" : "Yairo",
    "cpf" : "007.900.700-03",
    "cargo" : "Gerente",
    "telefone" : "88080-8888",
    "setor" : "RH"
  },
]

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  getFuncionario(){
    return FuncionarioList;
  }

  getOneFuncionario(_id){
    return FuncionarioList.find(funcionario => funcionario.id ===_id)
  }

  addFuncionario(funcionario : Funcionario) {
    FuncionarioList.push(funcionario);
  }

  editFuncionario(newFuncionarioEdit) {
    const index = FuncionarioList.findIndex(funcionario => funcionario.id === newFuncionarioEdit.id)
    FuncionarioList[index] = newFuncionarioEdit;
  }

  deleteFuncionario(_id){
    FuncionarioList.splice(_id, 1)
  }
}
