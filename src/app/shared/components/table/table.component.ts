import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IDepartmentResponse} from "../../../views/departments/types";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @Output() navigate: EventEmitter<number> = new EventEmitter();
  @Input() data: IDepartmentResponse;
  displayedColumns: string[] = [];
  columns: string[] = [];
  dataSource = [];

  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.dataSource = this.data.items;
    this.resultsLength = this.data.totalCount;
    this.displayedColumns = this.data.columns.map((item) => item.name);
    this.columns = this.data.columns;
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  onNavigate(id) {
    this.navigate.emit(id);
  }
}


