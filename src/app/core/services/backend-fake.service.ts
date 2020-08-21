import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {IDepartment} from "../../views/departments/types";
import {IEmployees} from "../../views/employees/types";

@Injectable({
  providedIn: 'root'
})
export class BackendFakeService implements InMemoryDbService {

  constructor() {
  }

  createDb(): any {
    let dataDepartments: IDepartment[] = [
      {
        id: 1,
        departmentName: 'Morgan-department',
        departmentLocation: 'Ukraine',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '8',
        totalWorkTime: '48'
      },
      {
        id: 2,
        departmentName: 'Empire-department',
        departmentLocation: 'USA',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '4',
        totalWorkTime: '44'
      },
      {
        id: 3,
        departmentName: 'Finance-department',
        departmentLocation: 'Croatia',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '1',
        totalWorkTime: '41'
      },
      {
        id: 4,
        departmentName: 'HR-department',
        departmentLocation: 'Sweden',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '7',
        totalWorkTime: '47'
      },
      {
        id: 5,
        departmentName: 'Dev-department',
        departmentLocation: 'Italy',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '12',
        totalWorkTime: '52'
      },
      {
        id: 6,
        departmentName: 'Lawyer-department',
        departmentLocation: 'Ukraine',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '12',
        totalWorkTime: '52'
      },
      {
        id: 7,
        departmentName: 'Engineer-department',
        departmentLocation: 'Polish',
        workTimeOfWeek: '40',
        workOverTimeOfWeek: '10',
        totalWorkTime: '50'
      }
    ];

    let dataEmployees: IEmployees[] = [
      {
        id: 1,
        fullName: 'Andrey Morgan',
        department: 'Morgan-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '4',
        totalWorkTime: '14'
      },
      {
        id: 2,
        fullName: 'Andrey Morgan',
        department: 'Morgan-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '3',
        totalWorkTime: '11'
      },
      {
        id: 3,
        fullName: 'Andrey Morgan',
        department: 'Morgan-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '4',
        totalWorkTime: '14'
      },
      {
        id: 4,
        fullName: 'Andrey Morgan',
        department: 'Empire-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '5',
        totalWorkTime: '13'
      },
      {
        id: 5,
        fullName: 'Andrey Morgan',
        department: 'Empire-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '7',
        totalWorkTime: '15'
      },
      {
        id: 6,
        fullName: 'Andrey Morgan',
        department: 'Empire-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '1',
        totalWorkTime: '9'
      },
      {
        id: 7,
        fullName: 'Andrey Morgan',
        department: 'Finance-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '2',
        totalWorkTime: '10'
      },
      {
        id: 8,
        fullName: 'Andrey Morgan',
        department: 'Finance-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '5',
        totalWorkTime: '13'
      },
      {
        id: 9,
        fullName: 'Andrey Morgan',
        department: 'Finance-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '4',
        totalWorkTime: '12'
      },
      {
        id: 10,
        fullName: 'Andrey Morgan',
        department: 'HR-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '6',
        totalWorkTime: '14'
      },
      {
        id: 11,
        fullName: 'Andrey Morgan',
        department: 'HR-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '4',
        totalWorkTime: '10'
      },
      {
        id: 12,
        fullName: 'Andrey Morgan',
        department: 'HR-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '5',
        totalWorkTime: '13'
      },
      {
        id: 13,
        fullName: 'Andrey Morgan',
        department: 'Dev-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '6',
        totalWorkTime: '14'
      },
      {
        id: 14,
        fullName: 'Andrey Morgan',
        department: 'Dev-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '4',
        totalWorkTime: '12'
      },
      {
        id: 15,
        fullName: 'Andrey Morgan',
        department: 'Lawyer-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '5',
        totalWorkTime: '13'
      },
      {
        id: 16,
        fullName: 'Andrey Morgan',
        department: 'Lawyer-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '6',
        totalWorkTime: '14'
      },
      {
        id: 16,
        fullName: 'Andrey Morgan',
        department: 'Engineer-department',
        dateOfBirth: '20.07.1997',
        position: 'Software developer',
        experience: '7 month',
        workTimeOfWeek: '8',
        workOverTimeOfWeek: '6',
        totalWorkTime: '14'
      },
    ];

    return {
      dataDepartments: {
        items: dataDepartments,
        totalCount: dataDepartments.length,
        columns: [
          {
            uiName: 'Department Name',
            name: 'departmentName'
          },
          {
            uiName: 'Department Location',
            name: 'departmentLocation'
          }
        ]
      },
      dataEmployees: {
        items: dataEmployees,
        totalCount: dataEmployees.length,
        columns: [
          {
            uiName: 'Full Name',
            name: 'fullName'
          }
        ]
      },
    };
  }
}
