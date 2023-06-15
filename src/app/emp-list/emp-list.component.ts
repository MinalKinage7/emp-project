import { Component, NgModule, } from '@angular/core';
import data  from "../../data";
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})

export class EmpListComponent {
  constructor(private router: Router) {
  }

  visible: boolean = false;
  datasource: any = data;

  onClick(d: any){
      console.log(d);
  }
  
  deleteEmployee(id:number) {
    alert("deleted Employee " + id);
  }

}

 