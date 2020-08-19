import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentPageComponent} from "./pages/department-page/department-page.component";
import {EmployeePageComponent} from "./pages/employee-page/employee-page.component";



const routes: Routes = [
  {path: '', component: DepartmentPageComponent},
  {path: 'department', component: DepartmentPageComponent},
  {path: 'employee', component: EmployeePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
