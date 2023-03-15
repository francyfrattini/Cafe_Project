import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Signaturecocktail } from '../classes/signaturecocktail';

@Injectable({
  providedIn: 'root'
})
export class SignaturecocktailService {

  constructor(private http: HttpClient) { }

  getAllSignaturecocktail():Observable<Signaturecocktail>{
    return this.http.get<Signaturecocktail>("http://localhost:3000/signaturecocktail")
  }
  
  postSignaturecocktail(data:any){
    return this.http.post<any>("http://localhost:3000/signaturecocktail", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getSignaturecocktail(){
    return this.http.get<any>("http://localhost:3000/signaturecocktail")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateSignaturecocktail(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/signaturecocktail/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteSignaturecocktail(id:number){
    return this.http.delete<any>("http://localhost:3000/signaturecocktail/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
