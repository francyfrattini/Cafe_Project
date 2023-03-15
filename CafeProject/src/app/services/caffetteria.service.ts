import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Caffetteria } from '../classes/caffetteria';

@Injectable({
  providedIn: 'root'
})
export class CaffetteriaService {

  constructor(private http: HttpClient) { }

  getAllCaffetteria():Observable<Caffetteria>{
    return this.http.get<Caffetteria>("http://localhost:3000/caffetteria")
  }

  postCaffetteria(data:any){
    return this.http.post<any>("http://localhost:3000/caffetteria", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCaffetteria(){
    return this.http.get<any>("http://localhost:3000/caffetteria")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCaffetteria(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/caffetteria/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCaffetteria(id:number){
    return this.http.delete<any>("http://localhost:3000/caffetteria/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
