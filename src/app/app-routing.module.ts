import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent} from "./views/departments/pages/department/department.component";


const routes: Routes = [

  // {path: 'department', component: DepartmentComponent},
  {
    path: '',
    loadChildren: () => import('./views/departments/department.module').then((m) => m.DepartmentModule),
  },
  {
    path: 'employees',
    loadChildren: () => import('./views/employees/employees.module').then((m) => m.EmployeesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
