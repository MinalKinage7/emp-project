import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import data from 'src/data';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent {
constructor(private router: Router, private route:ActivatedRoute){

}

submitted =false;
  addForm =  new FormGroup({

    first_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    last_name: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    gender: new FormControl(' ',  [
      Validators.required,
    ]),
    organisation: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
    role: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    manager_name: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
   
    
    EmpNo: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
   
    salary: new FormControl('', [
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
  
    
    
   

  });

  get addAdminFormControl() {
    return this.addForm.controls;
  }

  onSubmit(form:any){
    this.submitted = true;
   if (this.addForm.valid) {
  
   let data =  JSON.stringify (form.value);
   this.router.navigate(["/admin",({'data': data })]);
    }
    else{
      console.error("Fill out form")
    }
  
  }

  

}
