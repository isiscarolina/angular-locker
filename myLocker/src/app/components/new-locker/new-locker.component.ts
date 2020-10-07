import { Component, OnInit } from '@angular/core';
import { LockerService } from '../../services/locker.service'

@Component({
  selector: 'app-new-locker',
  templateUrl: './new-locker.component.html',
  styleUrls: ['./new-locker.component.css']
})
export class NewLockerComponent implements OnInit {

  myId = 4

  newLocker = {
    id: this.myId,
    numeroLocker : "",
    tipoLocker : "",
    serialLocker : "",
    observacao : "",
    dataOcupacao: ""
  }

  constructor(private listServ: LockerService) { }

  ngOnInit(): void {
  }

  addLocker(){
    console.log("datos enviados y funcionando" , this.newLocker)
    this.listServ.addLocker(this.newLocker)
    this.myId ++;
    this.newLocker = {
      id: 0,
      numeroLocker : "",
      tipoLocker : "",
      serialLocker : "",
      observacao : "",
      dataOcupacao: ""
    }

  }

}
