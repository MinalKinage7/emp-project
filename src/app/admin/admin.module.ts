import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EmployeeModule } from '../employee/employee.module';






@NgModule({
  declarations: [
    AddAdminComponent,
    ListAdminComponent,
    AdminHomeComponent,
    EditAdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    EmployeeModule
  ],
 
 
})
export class AdminModule { }
