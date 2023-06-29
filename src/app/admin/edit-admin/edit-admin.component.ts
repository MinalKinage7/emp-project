import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { admin} from '../../interaces/admin';
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent {
  submitted = false;
  myData : admin = this.location.getState() as admin
 
  constructor(private router: Router, public route: ActivatedRoute, private location:Location) {
   
  }


  editAdminForm = new FormGroup({
    first_name: new FormControl(this.myData.first_name ? this.myData.first_name :'', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    last_name: new FormControl(this.myData.last_name ? this.myData.last_name : '',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    gender: new FormControl(this.myData.gender ? this.myData.gender : ' ', [
      Validators.required,
    ]),
    organisation: new FormControl(this.myData.organisation ? this.myData.organisation :'',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
    role: new FormControl(this.myData.role ?this.myData.role :1,  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    manager_name: new FormControl(this.myData.manager_name ? this.myData.manager_name : '',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
   
    
    EmpNo: new FormControl(this.myData.EmpNo? this.myData.EmpNo : '',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
   
    salary: new FormControl(this.myData.salary?this.myData.salary :0 ,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5),
    ]),

    is_admin: new FormControl(true,  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    id: new FormControl(null,  [
    
    ]),
  
  })
  get adminFormControls() {
    return this.editAdminForm.controls;
  }
  onSubmit(form:any) {
    console.log(form.value)
    
    if (form.valid) {    
    this.submitted = true;
    
      this.router.navigateByUrl('/admin')
    }
    else {
      console.error("Fill out form")
    }
  }


}
