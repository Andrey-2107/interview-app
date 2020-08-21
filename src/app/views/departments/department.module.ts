import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {DepartmentComponent} from './pages/department/department.component';
import {DepartmentDetailComponent} from './pages/department-detail/department-detail/department-detail.component';
import {CommonModule} from "@angular/common";
import {DepartmentRoutingModule} from "./department-routing.module";

@NgModule({
  imports: [SharedModule, CommonModule, DepartmentRoutingModule],
  exports: [],
  declarations: [DepartmentComponent, DepartmentDetailComponent]
})

export class DepartmentModule {

}
