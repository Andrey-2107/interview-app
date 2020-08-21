import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {CdkColumnDef} from "@angular/cdk/table";

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatButtonModule],
  declarations: [],
  providers: [CdkColumnDef]
})

export class AppMaterialModule {

}
