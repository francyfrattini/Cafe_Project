import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Analcolici } from '../classes/analcolici';

@Injectable({
  providedIn: 'root'
})
export class AnalcoliciService {

  constructor(private http: HttpClient) { }

  getAllAnalcolici():Observable<Analcolici>{
    return this.http.get<Analcolici>("http://localhost:3000/analcolici")
  }

  
  postAnalcolici(data:any){
    return this.http.post<any>("http://localhost:3000/analcolici", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAnalcolici(){
    return this.http.get<any>("http://localhost:3000/analcolici")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAnalcolici(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/analcolici/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAnalcolici(id:number){
    return this.http.delete<any>("http://localhost:3000/analcolici/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  
}
