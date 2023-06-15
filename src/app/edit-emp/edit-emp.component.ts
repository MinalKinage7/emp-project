import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { Employee } from '../interaces/empint';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent {


  submitted = false;
  myData : Employee = this.location.getState() as Employee
  constructor(private router: Router, private location : Location) {
  }
  empForm = new FormGroup({
    firstName: new FormControl(this.myData.first_name, [
      Validators.required,
      Validators.maxLength(15)
    ]),
    lastName: new FormControl(this.myData.last_name, [
      Validators.required,
      Validators.maxLength(15)
    ]),
    orgnisation: new FormControl(this.myData.organisation, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    managerName: new FormControl(this.myData.manager_name, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    optradio: new FormControl(this.myData.gender == 'Male' ? 'option1' : 'option2', [
      Validators.required,
    ]),

    EmpNo: new FormControl(this.myData.id, [
      Validators.required,
      Validators.maxLength(15)
    ]),


    salary: new FormControl(this.myData.salary, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5),
    ])
  })

  get empFormControl() {
    return this.empForm.controls;
  }

  onSubmit() {
    this.submitted = true
    if (this.empForm.valid) {
      this.router.navigateByUrl('/')
    }
    else {
      console.error("Fill out form")
    }
  }

  public ngOnInit(): void {
    console.log(this.myData)
  }
}
