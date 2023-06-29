import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})


export class AddEmpComponent {
  
  submitted = false;

  constructor(private router:Router){

  }
  empForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    lastName: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    orgnisation: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
    managerName: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
    optradio: new FormControl('option2',  [
      Validators.required,
    ]),
    
    EmpNo: new FormControl('',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    
    
    salary: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5),
    ])
  })

  get empFormControl() {
    return this.empForm.controls;
  }

  onSubmit(){
    this.submitted = true
    console.warn(this.empForm.value)
    if (this.empForm.valid) {
      this.router.navigateByUrl('/')
    }
    else{
      console.error("Fill out form")
    }

    
  }

  // onCklick(){
  // }
  

}
