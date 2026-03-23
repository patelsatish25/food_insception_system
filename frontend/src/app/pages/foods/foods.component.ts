import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FoodsService } from 'src/app/services/foods.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements AfterViewInit, OnInit {

  startDate!: Date | null;
  endDate!: Date | null;
  filterValue: string = '';

  displayedColumns: string[] = [
    'no',
    'food',
    'date',
    'starttime',
    'endtime',
    'category',
    'good',
    'bad',
    'confidence',
    'status'
  ];

  dataSource = new MatTableDataSource<any>();

  constructor(private api: FoodsService,private socket: SocketService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {

    this.loadFoods();

    /* SOCKET LISTENER */

    this.socket.listen("new-session")
      .subscribe(() => {
        console.log("New food record detected, reloading foods...");
        this.loadFoods();
      });

  }

  loadFoods() {
    this.api.getFoods().subscribe((data: any) => {

      this.dataSource.data = data.foods;

      /* FILTER LOGIC */

      this.dataSource.filterPredicate = (data: any, filter: string) => {

        // `filter` is composed as: "<searchText>|||<startIso>|||<endIso>"
        const [searchTextPart] = filter.split('|||');
        const searchText = (searchTextPart || '').trim().toLowerCase();

        const recordDate = new Date(data.date);

        const start = this.startDate ? new Date(this.startDate) : null;
        const end = this.endDate ? new Date(this.endDate) : null;

        if (start) {
          start.setHours(0, 0, 0, 0);
        }

        if (end) {
          end.setHours(23, 59, 59, 999);
        }

        const matchText =
          data.food.toLowerCase().includes(searchText) ||
          data.category.toLowerCase().includes(searchText) ||
          data.status.toLowerCase().includes(searchText);

        const matchDate =
          (!start || recordDate >= start) &&
          (!end || recordDate <= end);

        return matchText && matchDate;
      };

    });

  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  private refreshFilter(): void {
    const startIso = this.startDate ? this.startDate.toISOString() : '';
    const endIso = this.endDate ? this.endDate.toISOString() : '';

    this.dataSource.filter = `${this.filterValue}|||${startIso}|||${endIso}`;
  }

  /* TEXT SEARCH */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.refreshFilter();
  }

  /* DATE RANGE FILTER */

  applyDateFilter() {
    this.refreshFilter();
  }

  /* SESSION NUMBER */

  getGlobalIndex(localIndex: number): number {

    return this.paginator.pageIndex * this.paginator.pageSize + localIndex + 1;

  }

}