import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
selector: 'app-foods',
templateUrl: './foods.component.html',
styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements AfterViewInit {

displayedColumns: string[] = [
'name',
'category',
'good',
'bad',
'confidence',
'status'
];

dataSource = new MatTableDataSource([
{ name:'Apple', category:'Fruit', good:10, bad:1, confidence:0.92 },
{ name:'Burger', category:'Fast Food', good:3, bad:4, confidence:0.65 },
{ name:'Carrot', category:'Vegetable', good:8, bad:0, confidence:0.95 },
{ name:'Pizza', category:'Fast Food', good:5, bad:2, confidence:0.80 },
{ name:'Tomato', category:'Vegetable', good:7, bad:1, confidence:0.90 },
{ name:'Banana', category:'Fruit', good:12, bad:0, confidence:0.97 }
]);

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit(){
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
}

applyFilter(event: Event){
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();
}

}