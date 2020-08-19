import { NgModule } from '@angular/core';
import {AppMaterialModule} from './modules/app-material.module';
import {DepartmentComponent} from './components/department/department.component';
import {EmployeeComponent} from './components/employee/employee.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [AppMaterialModule, AppRoutingModule],
  exports: [AppMaterialModule, HeaderComponent],
  declarations: [DepartmentComponent, EmployeeComponent, HeaderComponent, ]
})

export class SharedModule {

}
