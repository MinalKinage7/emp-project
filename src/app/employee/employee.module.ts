import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';

import {  RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';



@NgModule({
  declarations: [
    AddEmpComponent,
    EmpListComponent,
    EditEmpComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    EmpListComponent
  ]
})
export class EmployeeModule { }
