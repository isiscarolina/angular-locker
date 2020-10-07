import { Injectable } from '@angular/core';
import { Locker } from '../models/locker';

const LockerList = [
  {
    "id" : 1,
    "numeroLocker" : "001",
    "tipoLocker" : "Armario",
    "serialLocker" : "AEFA34132424",
    "observacao" : "ativo",
    "dataOcupacao" : "21/07/2020 - 10:30"
  },
  {
    "id" : 2,
    "numeroLocker" : "023",
    "tipoLocker" : "Caixa",
    "serialLocker" : "AEFO7323-3",
    "observacao" : "ativo",
    "dataOcupacao" : "30/03/2020 - 16:25"
  },
  {
    "id" : 3,
    "numeroLocker" : "009",
    "tipoLocker" : "Armario",
    "serialLocker" : "AEFA3413232432",
    "observacao" : "não ativo",
    "dataOcupacao" : "N/A"
  },
]


@Injectable({
  providedIn: 'root'
})
export class LockerService {

  constructor() { }

  getLocker(){
    return LockerList;
  }

  getOneLocker(_id){
    return LockerList.find(locker => locker.id === _id)
  }

  addLocker(locker : Locker) {
    LockerList.push(locker);
  }

  editLocker(newLockerEdit) {
    const index = LockerList.findIndex(locker => locker.id === newLockerEdit.id)
    LockerList[index] = newLockerEdit;
  }

  deleteLocker(_id){
    LockerList.splice(_id, 1)
  }

}
