import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Grappe } from '../classes/grappe';

@Injectable({
  providedIn: 'root'
})
export class GrappeService {

  constructor(private http: HttpClient) { }

  getAllGrappe():Observable<Grappe>{
    return this.http.get<Grappe>("http://localhost:3000/grappe")
  }

  
  postGrappe(data:any){
    return this.http.post<any>("http://localhost:3000/grappe", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getGrappe(){
    return this.http.get<any>("http://localhost:3000/grappe")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateGrappe(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/grappe/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteGrappe(id:number){
    return this.http.delete<any>("http://localhost:3000/grappe/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  
}
