import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
const routes: Routes = [
 
  
  {
    path: "",
    component: EmpListComponent
  },
  {
    path: "create",
    component: AddEmpComponent
  },
  {
    path: "edit",
    component: EditEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
