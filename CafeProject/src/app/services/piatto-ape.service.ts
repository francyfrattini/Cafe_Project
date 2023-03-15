import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PiattoApe } from '../classes/piatto-ape';

@Injectable({
  providedIn: 'root'
})
export class PiattoApeService {

  constructor(private http: HttpClient) { }

  getAllPiattiApe():Observable<PiattoApe>{
    return this.http.get<PiattoApe>("http://localhost:3000/piattoaperitivo")
  }

  
  postPiattiApe(data:any){
    return this.http.post<any>("http://localhost:3000/piattoaperitivo", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getPiattiApe(){
    return this.http.get<any>("http://localhost:3000/piattoaperitivo")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updatePiattiApe(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/piattoaperitivo/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletePiattiApe(id:number){
    return this.http.delete<any>("http://localhost:3000/piattoaperitivo/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  
}
