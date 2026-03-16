import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';

@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {

  constructor(private api: UsersService) {
   
  }
  username='';
email='';
password='';
date = new Date();


displayedColumns: string[] = ['username','email','date','action'];

dataSource = new MatTableDataSource<any>([]);

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit(){
this.dataSource.paginator = this.paginator;
}

addUser(){

if(!this.username || !this.email || !this.password){
alert("Fill all fields");
return;
}

 this.api.addUser({
  username:this.username,
  email:this.email,
  password:this.password,
 
 }).subscribe((res:any)=>{
   this.api.getUsers().subscribe((res:any)=>{
    this.dataSource.data = res;
   });
 });

this.username='';
this.email='';
this.password='';
}

deleteUser(index:number){

const data = this.dataSource.data;

data.splice(index,1);

this.dataSource.data = [...data];

}
ngOnInit(){
this.api.getUsers().subscribe((res:any)=>{
this.dataSource.data = res;
});
}

}