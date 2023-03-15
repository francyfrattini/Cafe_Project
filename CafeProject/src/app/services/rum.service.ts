import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rum } from '../classes/rum';

@Injectable({
  providedIn: 'root'
})
export class RumService {

  constructor(private http: HttpClient) { }

  getAllRum():Observable<Rum>{
    return this.http.get<Rum>("http://localhost:3000/rum")
  }
  
  postRum(data:any){
    return this.http.post<any>("http://localhost:3000/rum", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getRum(){
    return this.http.get<any>("http://localhost:3000/rum")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateRum(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/rum/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRum(id:number){
    return this.http.delete<any>("http://localhost:3000/rum/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
