import {NgModule} from '@angular/core';
import {AppMaterialModule} from './modules/app-material.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {BackendFakeService} from "../core/services/backend-fake.service";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {TableComponent} from "./components/table/table.component";

@NgModule({
    imports: [AppMaterialModule, HttpClientModule, InMemoryWebApiModule.forRoot(BackendFakeService), RouterModule],
  exports: [AppMaterialModule, HeaderComponent, FormsModule, HttpClientModule, TableComponent],
  declarations: [
    HeaderComponent,
    TableComponent
  ]
})

export class SharedModule {

}
