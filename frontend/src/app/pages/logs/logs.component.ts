import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogService } from 'src/app/services/log.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
selector:'app-logs',
templateUrl:'./logs.component.html',
styleUrls:['./logs.component.css']
})

export class LogsComponent implements AfterViewInit{

    constructor(private api:LogService,private socket:SocketService){}
    ngOnInit(): void {
        
        this.loadLogs();

        this.socket.listen("new-log")
        .subscribe(()=>{
            console.log("New log detected, reloading logs...");
            this.loadLogs();
        });
    }

    loadLogs(){
        this.api.getLogs().subscribe((logs: any) => {
            this.dataSource.data = logs;
        });
    }
displayedColumns:string[]=[
'timestamp',
'level',
'source',
'message'
];

dataSource = new MatTableDataSource <any>([]);
@ViewChild(MatPaginator) paginator!:MatPaginator;

ngAfterViewInit(){
this.dataSource.paginator=this.paginator;
}

applyFilter(event:Event){

const filterValue=(event.target as HTMLInputElement).value;
this.dataSource.filter=filterValue.trim().toLowerCase();

}

}