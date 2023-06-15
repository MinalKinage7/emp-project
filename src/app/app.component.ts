import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  constructor(public router: Router) {
  }

  title = 'Employee Details';


}
