import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ViniRossi } from '../classes/vini-rossi';

@Injectable({
  providedIn: 'root'
})
export class ViniRossiService {

  constructor(private http: HttpClient) { }

  getAllViniRossi():Observable<ViniRossi>{
    return this.http.get<ViniRossi>("http://localhost:3000/vinirossi")
  }

  postViniRossi(data:any){
    return this.http.post<any>("http://localhost:3000/vinirossi", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getViniRossi(){
    return this.http.get<any>("http://localhost:3000/vinirossi")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateViniRossi(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/vinirossi/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteViniRossi(id:number){
    return this.http.delete<any>("http://localhost:3000/vinirossi/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
