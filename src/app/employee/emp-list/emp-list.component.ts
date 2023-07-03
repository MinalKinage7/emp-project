import { Component, NgModule, } from '@angular/core';
import data  from "../../../data";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})

export class EmpListComponent {
  adminValue:boolean = false;
  roleValue:number = 0;
   ObjDataSourse: any =[];
   obj :any ={};
  constructor(private router: Router, private route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.obj  = JSON.parse(params['obj']); 
   });
  }


  ngOnInit(){
   
    this.adminValue = this.obj.is_admin; 
    this.roleValue = this.obj.role;
   
  }

  
  title = 'Employee Details';

  visible: boolean = false;
  datasource: any = data;

  
  onClick(d: any){
      
      
  }
  
  deleteEmployee(id:number) {
    alert("deleted  " + id);
  }

}

 