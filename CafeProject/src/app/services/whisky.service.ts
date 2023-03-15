import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Whisky } from '../classes/whisky';

@Injectable({
  providedIn: 'root'
})
export class WhiskyService {

  constructor(private http: HttpClient) { }

  getAllWhisky():Observable<Whisky>{
    return this.http.get<Whisky>("http://localhost:3000/whisky")
  }
  
  postWhisky(data:any){
    return this.http.post<any>("http://localhost:3000/whisky", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getWhisky(){
    return this.http.get<any>("http://localhost:3000/whisky")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateWhisky(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/whisky/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteWhisky(id:number){
    return this.http.delete<any>("http://localhost:3000/whisky/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
