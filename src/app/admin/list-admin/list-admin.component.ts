import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { admin } from "../../interaces/admin"
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})

export class ListAdminComponent {
  items: admin = this.location.getState() as admin


  data: any = {};
  obj: any = {};
  count = 0;

  constructor(private router: Router, public route: ActivatedRoute, private location: Location) {

    route.params.subscribe(params => {

      this.obj = JSON.parse(params['obj']);

    });

    if (route.params) {
      route.params.subscribe(params => {

        this.data = JSON.parse(params['data']);

      });
    }
  }



  title = "Admin List"
  dataSource: any = [];
  localStore: any;

  ngOnInit() {
   this.localStore = localStorage.getItem('Data');
    this.localStore = JSON.parse(this.localStore);
    if (this.data) {

      this.localStore.push(this.data);
    }
    for (let index = 0; index < this.localStore.length; index++) {

      if (this.localStore[index].is_admin == true)

        this.dataSource.push(this.localStore[index]);

    }



  }
  
  deleteAdmin(id: any) {
   for (let index = 0 ; index < this.dataSource.length; index++) {
  if(this.dataSource[index].id == id){
    var id1 = this.dataSource[index].id; 
    this.dataSource.splice(index,1);
   localStorage.setItem('Data', JSON.stringify(this.dataSource));
   this.localStore = localStorage.getItem('Data');
   (this.localStore);
   this.dataSource = JSON.parse(this.localStore)
   }
  
   }
  }
  
  EditAdmin(d:any){
   
    // this.router.navigate(["/editAdmin",({'data': d })]);
  }
}








