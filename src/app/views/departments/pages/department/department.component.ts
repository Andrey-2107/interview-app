import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  dataDepartment;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getDataDepartment().subscribe(res => {
      this.dataDepartment = res;
    })
  }

  onNavigate(id) {
    this.router.navigate(['/department/detail/' + id])
  }

}
