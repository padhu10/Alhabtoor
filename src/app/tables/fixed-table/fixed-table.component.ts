
//import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { FixedTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-fixed-table',
  templateUrl: './fixed-table.component.html',
  styleUrls: ['./fixed-table.component.scss']
})
export class FixedTableComponent implements OnInit {
	// public displayedColumns = ['userId', 'userName', 'progress', 'color'];
	// public exampleDatabase = new ExampleDatabase();
	// public dataSource: ExampleDataSource | null;
  // 	public showFilterTableCode;
  // 	constructor() { }

  // 	ngOnInit() {
  // 		this.dataSource = new ExampleDataSource(this.exampleDatabase);
  //   }


  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: any[] = [];
  sortedData: any[];
  showResponsiveTableCode;

@ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
  pageLength = 0;
  pageSize = 15;
  helpers = FixedTableHelpers;

  @Input() status;
  @Input() actionStatus;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() sort = new EventEmitter();
  @Output() dup = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
      this.sortedData = this.getRows();
  }

  next(event) {
      this.sortedData = [];
    for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
          this.sortedData = [...this.sortedData, this.helpers.rows[i]];
      }
  }

  getRows() {
      for (var i=0;i<this.pageSize;i++) {
          this.rows = [...this.rows,this.helpers.rows[i]];
      }
      this.pageLength = this.helpers.rows.length;

      return this.rows;
  }

  sortData(sort: Sort) {
      const data = this.rows;

      if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
      }

      this.sortedData = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';

          if (['id', 'progress'].includes(sort.active)) {
              return compare(parseInt(a[sort.active]), parseInt(b[sort.active]), isAsc)
          }

          return compare(a[sort.active], b[sort.active], isAsc)
      });
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

