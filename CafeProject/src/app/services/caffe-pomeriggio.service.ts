import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CaffePomeriggio } from '../classes/caffe-pomeriggio';

@Injectable({
  providedIn: 'root'
})
export class CaffePomeriggioService {

  constructor(private http: HttpClient) { }

  getAllCaffePomeriggio():Observable<CaffePomeriggio>{
    return this.http.get<CaffePomeriggio>("http://localhost:3000/caffedelpomeriggio")
  }

  postCaffePome(data:any){
    return this.http.post<any>("http://localhost:3000/caffedelpomeriggio", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCaffePome(){
    return this.http.get<any>("http://localhost:3000/caffedelpomeriggio")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCaffePome(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/caffedelpomeriggio/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCaffePome(id:number){
    return this.http.delete<any>("http://localhost:3000/caffedelpomeriggio/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
