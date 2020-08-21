import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  dataEmployees;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getDataEmloyees().subscribe(res => {
      this.dataEmployees = res;
    })
  }

  onNavigate(id) {
    this.router.navigate(['/employees/detail/' + id])
  }
}
