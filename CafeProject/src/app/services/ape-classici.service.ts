import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApeClassici } from '../classes/ape-classici';

@Injectable({
  providedIn: 'root'
})
export class ApeClassiciService {

  constructor(private http: HttpClient) { }

  getAllApeClassici():Observable<ApeClassici>{
    return this.http.get<ApeClassici>("http://localhost:3000/aperitiviclassici")
  }

  postApeClassici(data:any){
    return this.http.post<any>("http://localhost:3000/aperitiviclassici", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getApeClassici(){
    return this.http.get<any>("http://localhost:3000/aperitiviclassici")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateApeClassici(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/aperitiviclassici/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteApeClassici(id:number){
    return this.http.delete<any>("http://localhost:3000/aperitiviclassici/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
