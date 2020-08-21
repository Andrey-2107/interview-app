import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from "./pages/department/department.component";
import { DepartmentDetailComponent } from "./pages/department-detail/department-detail/department-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'department', pathMatch: 'full'},
  {path: 'department', component: DepartmentComponent},
  {path: 'department/detail/:id', component: DepartmentDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DepartmentRoutingModule {

}
