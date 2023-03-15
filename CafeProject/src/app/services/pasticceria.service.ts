import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pasticceria } from '../classes/pasticceria';

@Injectable({
  providedIn: 'root'
})
export class PasticceriaService {

  constructor(private http: HttpClient) { }

  getAllPasticceria():Observable<Pasticceria>{
    return this.http.get<Pasticceria>("http://localhost:3000/pasticceria")
  }

  postPasticceria(data:any){
    return this.http.post<any>("http://localhost:3000/pasticceria", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getPasticceria(){
    return this.http.get<any>("http://localhost:3000/pasticceria")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updatePasticceria(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/pasticceria/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletePasticceria(id:number){
    return this.http.delete<any>("http://localhost:3000/pasticceria/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
