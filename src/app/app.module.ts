import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AdminModule } from './admin/admin.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { RouterLink } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AdminModule,
    UserAuthModule,
    RouterLink,
    EmployeeModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent ],

})
export class AppModule {

}



