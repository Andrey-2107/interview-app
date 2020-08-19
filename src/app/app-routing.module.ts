import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent} from './shared/components/department/department.component';
import {EmployeeComponent} from './shared/components/employee/employee.component';


const routes: Routes = [
  {path: '', component: DepartmentComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
