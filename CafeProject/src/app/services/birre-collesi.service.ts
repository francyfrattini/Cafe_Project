import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BirreCollesi } from '../classes/birre-collesi';

@Injectable({
  providedIn: 'root'
})
export class BirreCollesiService {

  constructor(private http: HttpClient) { }

  getAllBirreCollesi():Observable<BirreCollesi>{
    return this.http.get<BirreCollesi>("http://localhost:3000/birrecollesi")
  }

  postBirreCollesi(data:any){
    return this.http.post<any>("http://localhost:3000/birrecollesi", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBirreCollesi(){
    return this.http.get<any>("http://localhost:3000/birrecollesi")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBirreCollesi(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/birrecollesi/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBirreCollesi(id:number){
    return this.http.delete<any>("http://localhost:3000/birrecollesi/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
