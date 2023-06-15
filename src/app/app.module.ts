import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditEmpComponent } from './edit-emp/edit-emp.component'


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    EmpListComponent,
    EditEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



