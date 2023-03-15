import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gin } from '../classes/gin';

@Injectable({
  providedIn: 'root'
})
export class GinService {

  constructor(private http: HttpClient) { }

  getAllGin():Observable<Gin>{
    return this.http.get<Gin>("http://localhost:3000/gin")
  }
  
  postGin(data:any){
    return this.http.post<any>("http://localhost:3000/gin", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getGin(){
    return this.http.get<any>("http://localhost:3000/gin")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateGin(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/gin/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteGin(id:number){
    return this.http.delete<any>("http://localhost:3000/gin/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
