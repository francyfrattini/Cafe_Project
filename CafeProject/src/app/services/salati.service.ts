import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Salati } from '../classes/salati';

@Injectable({
  providedIn: 'root'
})
export class SalatiService {

  constructor(private http: HttpClient) { }

  getAllSalati():Observable<Salati>{
    return this.http.get<Salati>("http://localhost:3000/salati")
  }

  postSalati(data:any){
    return this.http.post<any>("http://localhost:3000/salati", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getSalati(){
    return this.http.get<any>("http://localhost:3000/salati")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateSalati(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/salati/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteSalati(id:number){
    return this.http.delete<any>("http://localhost:3000/salati/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
