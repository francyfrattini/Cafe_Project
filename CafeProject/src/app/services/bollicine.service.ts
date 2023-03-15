import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bollicine } from '../classes/bollicine';

@Injectable({
  providedIn: 'root'
})
export class BollicineService {

  constructor(private http: HttpClient) { }

  getAllBollicine():Observable<Bollicine>{
    return this.http.get<Bollicine>("http://localhost:3000/bollicine")
  }
  
  
  postBollicine(data:any){
    return this.http.post<any>("http://localhost:3000/bollicine", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBollicine(){
    return this.http.get<any>("http://localhost:3000/bollicine")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBollicine(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/bollicine/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBollicine(id:number){
    return this.http.delete<any>("http://localhost:3000/bollicine/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
