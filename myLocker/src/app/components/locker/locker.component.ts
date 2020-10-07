import { Component, OnInit } from '@angular/core';
import { LockerService } from '../../services/locker.service'

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.css']
})
export class LockerComponent implements OnInit {

  myLocker
  lockerFound

  constructor(private listServ : LockerService) { }


  ngOnInit(): void {
  }

  getPositionsLocker($event) {
    this.myLocker = this.listServ.getOneLocker($event)
    this.lockerFound = this.myLocker
  }

  editLocker() {
    this.listServ.editLocker(this.lockerFound)
  }

}
