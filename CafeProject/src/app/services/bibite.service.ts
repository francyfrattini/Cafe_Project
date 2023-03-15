import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bibite } from '../classes/bibite';

@Injectable({
  providedIn: 'root'
})
export class BibiteService {

  constructor(private http: HttpClient) { }

  getAllBibite():Observable<Bibite>{
    return this.http.get<Bibite>("http://localhost:3000/bibite")
  }

  postBibite(data:any){
    return this.http.post<any>("http://localhost:3000/bibite", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBibite(){
    return this.http.get<any>("http://localhost:3000/bibite")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBibite(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/bibite/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBibite(id:number){
    return this.http.delete<any>("http://localhost:3000/bibite/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
