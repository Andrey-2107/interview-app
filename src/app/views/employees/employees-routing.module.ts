import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {EmployeeComponent} from "./pages/employee/employee.component";
import {EmployeeDetailComponent} from "./pages/employee-detail/employee-detail/employee-detail.component";

const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'employees/detail/:id', component: EmployeeDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeesRoutingModule { }
