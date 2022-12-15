
// import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

// import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
// import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
// import { TABLE_HELPERS, ExampleDatabase, ExampleDataSource } from './helpers.data';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { SelectionModel } from '@angular/cdk/collections';

// @Component({
//   selector: 'cdk-feature-table',
//   templateUrl: './feature-table.component.html',
//   styleUrls: ['./feature-table.component.scss']
// })
// export class FeatureTableComponent implements OnInit {

// 	showNavListCode;
// 	displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
// 	exampleDatabase = new ExampleDatabase();
// 	selection = new SelectionModel<string>(true, []);
// 	dataSource: ExampleDataSource | null;
// 	allfeatures = TABLE_HELPERS;
// 	constructor() { }
// 	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
// 	@ViewChild(MatSort, { static: true }) sort: MatSort;
// 	@ViewChild('filter', { static: true }) filter: ElementRef;

// 	ngOnInit() {
// 	    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
// 	    observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
// 	        debounceTime(150),
// 	        distinctUntilChanged(),)
// 	        .subscribe(() => {
// 	          if (!this.dataSource) { return; }
// 	          this.dataSource.filter = this.filter.nativeElement.value;
// 	        });
// 	}

// 	isAllSelected(): boolean {
// 	    if (!this.dataSource) { return false; }
// 	    if (this.selection.isEmpty()) { return false; }

// 	    if (this.filter.nativeElement.value) {
// 	      return this.selection.selected.length == this.dataSource.renderedData.length;
// 	    } else {
// 	      return this.selection.selected.length == this.exampleDatabase.data.length;
// 	    }
// 	}

// 	masterToggle() {
// 	    if (!this.dataSource) { return; }

// 	    if (this.isAllSelected()) {
// 	      this.selection.clear();
// 	    } else if (this.filter.nativeElement.value) {
// 	      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
// 	    } else {
// 	      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
// 	    }
// 	}

// }


















import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { FeatureTableHelpers} from './helpers.data';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'cdk-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

  	displayedColumns = ['userId', 'userName', 'progress', 'color'];
    rows: any[] = [];
    sortedData: any[];
    showResponsiveTableCode;

	@ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 15;
    helpers = FeatureTableHelpers;

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
