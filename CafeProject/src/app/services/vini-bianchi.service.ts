import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ViniBianchi } from '../classes/vini-bianchi';

@Injectable({
  providedIn: 'root'
})
export class ViniBianchiService {

  constructor(private http: HttpClient) { }

  getAllViniBianchi():Observable<ViniBianchi>{
    return this.http.get<ViniBianchi>("http://localhost:3000/vinibianchi")
  }
  
  postViniBianchi(data:any){
    return this.http.post<any>("http://localhost:3000/vinibianchi", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getViniBianchi(){
    return this.http.get<any>("http://localhost:3000/vinibianchi")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateViniBianchi(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/vinibianchi/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteViniBianchi(id:number){
    return this.http.delete<any>("http://localhost:3000/vinibianchi/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
