export interface IDepartment {
  id: number;
  departmentName: string;
  departmentLocation: string;
  workTimeOfWeek: string;
  workOverTimeOfWeek: string;
  totalWorkTime: string;
}

export interface IDepartmentResponse {
  items: IDepartment[];
  totalCount: number;
  columns: any;
}
