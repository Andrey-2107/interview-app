import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../core/services/data.service";
import {IEmployees} from "../../../types";
import {IDepartment} from "../../../../departments/types";
import {ActivatedRoute} from "@angular/router";
import {flatMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  currentEmployeeId: number;
  currentEmployee: IEmployees;
  currentDepartment: IDepartment;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentEmployeeId = +this.activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    // this.dataService.getDataEmloyees().subscribe(res => {
    //   if(res && res.items && res.items.length) {
    //     this.currentEmployee = res.items.find(item => item.id === +this.currentEmployeeId);
    //
    //     this.dataService.getDataDepartment().subscribe(res => {
    //       if(res && res.items && res.items.length) {
    //         this.currentDepartment = res.items.find(item => item.departmentName === this.currentEmployee.department);
    //       }
    //     });
    //   }
    // });

    const obs$ = this.dataService.getDataEmloyees().pipe(
      flatMap((res) => {
        if(res && res.items && res.items.length) {
          this.currentEmployee = res.items.find(item => item.id === +this.currentEmployeeId);
        }
        return this.dataService.getDataDepartment().pipe(
          tap(res => {
            if(res && res.items && res.items.length) {
              this.currentDepartment = res.items.find(item => item.departmentName === this.currentEmployee.department);
            }
          })
        );
      })
    );
    obs$.subscribe();
  }
}
