import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Birre } from '../classes/birre';

@Injectable({
  providedIn: 'root'
})
export class BirreService {

  constructor(private http: HttpClient) { }

  getAllBirre():Observable<Birre>{
    return this.http.get<Birre>("http://localhost:3000/birre")
  }

  postBirre(data:any){
    return this.http.post<any>("http://localhost:3000/birre", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBirre(){
    return this.http.get<any>("http://localhost:3000/birre")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBirre(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/birre/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBirre(id:number){
    return this.http.delete<any>("http://localhost:3000/birre/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
