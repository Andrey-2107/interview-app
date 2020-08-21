import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DepartmentModule } from "./views/departments/department.module";
import { EmployeesModule } from "./views/employees/employees.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DepartmentModule,
    EmployeesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
