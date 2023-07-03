import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { admin } from "../../interaces/admin"
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../interaces/empint';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})

export class ListAdminComponent {
  items: admin = this.location.getState() as admin;
  data: any = {};
  obj: any = {};
  count = 0;
  roleValue: number = 0;
  adminValue: boolean = false;
  myData : Employee = this.location.getState() as Employee


  constructor(private router: Router, public route: ActivatedRoute,  private location : Location) {

    route.params.subscribe(params => {

      this.obj = JSON.parse(params['obj']);


    });
    localStorage.setItem('obj', JSON.stringify(this.obj));
    this.storageObj.push(localStorage.getItem('obj'));
    this.obj = JSON.parse(this.storageObj[0])
    this.roleValue = this.obj.role;
    this.adminValue = this.obj.is_admin;


    // if (route.params) {
    //   route.params.subscribe(params => {

    //     this.data = JSON.parse(params['data']);

    //   });
    // }
  }



  title = "Admin List"
  dataSource: any = [];
  localStore: any;
  storageObj: any = [];

  ngOnInit() {


    this.localStore = localStorage.getItem('Data');
    this.localStore = JSON.parse(this.localStore);
    // if (this.data) {
    //   this.localStore.push(this.data);

    // }
    for (let index = 0; index < this.localStore.length; index++) {

      if (this.localStore[index].is_admin == true)

        this.dataSource.push(this.localStore[index]);


    }



  }

  deleteAdmin(id: any) {
    for (let index = 0; index < this.dataSource.length; index++) {
      if (this.dataSource[index].id == id) {
        var id1 = this.dataSource[index].id;
        this.dataSource.splice(index, 1);
        localStorage.setItem('Data', JSON.stringify(this.dataSource));
        this.localStore = localStorage.getItem('Data');
        (this.localStore);
        this.dataSource = JSON.parse(this.localStore)
      }

    }
  }

  addformvisible: boolean = false;
  editformVisible:boolean = false;
 
 clickEdit(d:any){
   this.addformvisible = false;
   this.editAdminForm.patchValue(d)
   this.editformVisible =  true;
  
 
  
 }
 
 EditBack(){
  this.editformVisible =  false;
 }
 addBack(){
  this.addformvisible =  false;
 }
 
  ClickAdd() {
    // this.submitted =false;
    this.editformVisible =  false;
    this.addformvisible = true;

  }
  submitted = false;
  addForm = new FormGroup({

    first_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    gender: new FormControl(' ', [
      Validators.required,
    ]),
    organisation: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    role: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    manager_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),


    EmpNo: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),

    salary: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5),
    ]),
    is_admin: new FormControl(true, [
      Validators.required,
      Validators.maxLength(15)
    ]),
    id: new FormControl(null, [

    ]),





  });

  get addAdminFormControl() {
    return this.addForm.controls;
  }

  onSubmit(form: any) {
     this.submitted = true;
    if (this.addForm.valid ) {
      let data = form.value;
      this.dataSource.push(data);
      this.addformvisible = false
      this.addForm.reset({
       first_name: '',
    last_name: '',
    gender: '',
    salary : null,
    id: null,
    manager_name: '',
    organisation: '',
    is_admin : true,
    EmpNo:'',
    role:null,
        
    });;  
      this.submitted = false;
   
    }
    else {
      console.error("Fill out form")
    }

  }
 
  editAdminForm = new FormGroup(
    {
    first_name: new FormControl('', [
     
      Validators.required,
      Validators.maxLength(15)
    ]),
    last_name: new FormControl( '',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    gender: new FormControl(' ', [
      Validators.required,
    ]),
    organisation: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
    role: new FormControl(1,  [
      Validators.required,
      Validators.maxLength(15)
    ]),
    manager_name: new FormControl('',  [
      Validators.required,
      Validators.maxLength(30)
    ]),
   
    
    EmpNo: new FormControl( '',  [
      Validators.required,
      Validators.maxLength(15)
    ]),
   
    salary: new FormControl(0 ,[
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

  onEditSubmit(form:any) {
   
    
    if (form.valid) {  
     console.log(form.value)  
    this.submitted = true;
    this.editformVisible = false;
    }
    else {
      console.error("Fill out form")
    }
  }

}








