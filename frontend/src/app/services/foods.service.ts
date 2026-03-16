import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http:HttpClient) { }
  getDashboardAnalytics(){
return this.http.get("http://localhost:3000/api/food/analytics");

}
}





