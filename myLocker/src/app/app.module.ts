import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewFuncionarioComponent } from './components/new-funcionario/new-funcionario.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { CommonModule } from '@angular/common';
import { LockerComponent } from './components/locker/locker.component';
import { ListaLockerComponent } from './components/lista-locker/lista-locker.component';
import { NewLockerComponent } from './components/new-locker/new-locker.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFuncionarioComponent,
    FuncionariosComponent,
    ListaFuncionariosComponent,
    LockerComponent,
    ListaLockerComponent,
    NewLockerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
