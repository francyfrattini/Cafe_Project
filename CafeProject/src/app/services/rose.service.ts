import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rose } from '../classes/rose';

@Injectable({
  providedIn: 'root'
})
export class RoseService {

  constructor(private http: HttpClient) { }

  getAllRose():Observable<Rose>{
    return this.http.get<Rose>("http://localhost:3000/rose")
  }

  postRose(data:any){
    return this.http.post<any>("http://localhost:3000/rose", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getRose(){
    return this.http.get<any>("http://localhost:3000/rose")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateRose(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/rose/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRose(id:number){
    return this.http.delete<any>("http://localhost:3000/rose/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
