import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { LockerService } from '../../services/locker.service'
import { Locker } from '../../models/locker'

@Component({
  selector: 'app-lista-locker',
  templateUrl: './lista-locker.component.html',
  styleUrls: ['./lista-locker.component.css']
})
export class ListaLockerComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  myLocker : Locker[]

  constructor(private listServ : LockerService) { }

  ngOnInit(): void {
    this.myLocker = this.listServ.getLocker()
    console.log("my locker : " , this.myLocker)
  }

  deleteFuncionario(_id) {
    this.listServ.deleteLocker(_id);
  }

  getPositionsLocker(_id) {
    this.sendPosition.emit(_id)

  }


}
