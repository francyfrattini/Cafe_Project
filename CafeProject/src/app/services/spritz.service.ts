import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Spritz } from '../classes/spritz';

@Injectable({
  providedIn: 'root'
})
export class SpritzService {

  constructor(private http: HttpClient) { }

  getAllSpritz():Observable<Spritz>{
    return this.http.get<Spritz>("http://localhost:3000/spritz")
  }
  
  postSpritz(data:any){
    return this.http.post<any>("http://localhost:3000/spritz", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getSpritz(){
    return this.http.get<any>("http://localhost:3000/spritz")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateSpritz(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/spritz/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteSpritz(id:number){
    return this.http.delete<any>("http://localhost:3000/spritz/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
