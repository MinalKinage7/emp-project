import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';

import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { LoginComponent } from './user-auth/login/login.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  
  {
    path: "admin",
    component: ListAdminComponent
  },
  {
    path: "add-admin",
    component: AddAdminComponent
  },
  {
    path: "EmpList",
    component: EmpListComponent
  },
  {
    path: "create",
    component: AddEmpComponent
  },
  {
    path: "edit",
    component: EditEmpComponent
  },
  {
    path: "add-admin",
    component: AddAdminComponent
  },
  {
    path: "editAdmin",
    component: EditAdminComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
