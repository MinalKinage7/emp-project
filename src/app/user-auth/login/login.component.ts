import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import data1 from "../../../data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  correctPass: boolean = false;
  loginName: any;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),

  })

  dataSource: any;
  submitted = false;
  get loginformControl() {
    return this.loginForm.controls;
  }

  onSubmit(submitForm: any) {
    this.submitted = true;
    localStorage.setItem('Data', JSON.stringify(data1));
    this.dataSource = localStorage.getItem('Data');
    this.dataSource = JSON.parse(this.dataSource);

    if (this.dataSource) {
      for (let index = 0; index < this.dataSource.length; index++) {
        var useName = this.dataSource[index].username;
        var pwd = this.dataSource[index].password;
        if (useName == submitForm.value.username && pwd == submitForm.value.password && this.dataSource[index].is_admin == true) {
          this.correctPass = true;
          let obj = this.dataSource[index];
          obj = JSON.stringify(obj);
          this.router.navigate(['/admin', ({ 'obj': obj })]);
          this.loginForm.reset();
          console.log(useName);
          console.log(submitForm.value.username);
        }
        else if (useName == submitForm.value.username && pwd == submitForm.value.password && this.dataSource[index].is_admin == false) {
          this.correctPass = true;
          let obj = this.dataSource[index];
          this.router.navigate(['/EmpList', ({ 'obj': obj })]);
          this.loginForm.reset();
        }
        else if (useName != submitForm.value.username || pwd != submitForm.value.password) {
          console.log(useName);
          console.log(submitForm.value.username);
          console.log("username & password is  incorrect");
        }
      }
      if (!this.correctPass) {
        alert("username & password is incorrect");
        this.loginForm.reset();
      }

    }
  }

} 
