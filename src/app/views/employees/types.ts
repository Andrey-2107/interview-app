import {IDepartment} from "../departments/types";

export interface IEmployees {
  id: number
  fullName: string;
  dateOfBirth: string;
  position: string;
  experience: string;
  workTimeOfWeek: string;
  workOverTimeOfWeek: string;
  totalWorkTime: string;
  department: string;
}

export interface IEmployeesResponse {
  items: IEmployees[];
  totalCount: number;
  columns: any;
}
