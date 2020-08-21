import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IDepartmentResponse} from "../../views/departments/types";
import {IEmployeesResponse} from "../../views/employees/types";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = environment.apiUrl;
  departmentEndpoint: string = environment.departmentEndpoint;
  employeesEndpoint: string = environment.employeeEndpoint;

  constructor(
    private http: HttpClient
  ) {
  }

  getDataDepartment(): Observable<IDepartmentResponse> {
    return this.http.get<IDepartmentResponse>(`${this.apiUrl}${this.departmentEndpoint}`)
  }

  getDataEmloyees(): Observable<IEmployeesResponse> {
    return this.http.get<IEmployeesResponse>(`${this.apiUrl}${this.employeesEndpoint}`)
  }
}
