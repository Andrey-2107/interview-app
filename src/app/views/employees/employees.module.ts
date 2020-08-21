import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {EmployeeComponent} from './pages/employee/employee.component';
import {CommonModule} from "@angular/common";
import {EmployeesRoutingModule} from "./employees-routing.module";
import {EmployeeDetailComponent} from './pages/employee-detail/employee-detail/employee-detail.component';

@NgModule({
  imports: [SharedModule, CommonModule, EmployeesRoutingModule],
  exports: [],
  declarations: [EmployeeComponent, EmployeeDetailComponent]
})

export class EmployeesModule {
}
