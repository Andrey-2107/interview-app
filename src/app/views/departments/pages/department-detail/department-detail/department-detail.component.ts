import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../../../core/services/data.service";
import {IDepartment} from "../../../types";
import {IEmployeesResponse} from "../../../../employees/types";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  currentDepartmentId: number;
  currentDepartment: IDepartment;
  currentDepartmentEmployees: IEmployeesResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) {
   this.currentDepartmentId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.dataService.getDataDepartment().subscribe(res => {
      if(res && res.items && res.items.length) {
        this.currentDepartment = res.items.find(item => item.id === +this.currentDepartmentId);
      }
    });

    this.dataService.getDataEmloyees().subscribe(res => {
      this.currentDepartmentEmployees = {
        ...res,
        items: res.items.filter(item => item.department === this.currentDepartment.departmentName)
      }
    })
  }

}
