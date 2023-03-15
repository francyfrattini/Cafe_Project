import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cocktails } from '../classes/cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  getAllCocktails():Observable<Cocktails>{
    return this.http.get<Cocktails>("http://localhost:3000/cocktails")
  }
  
  postCocktails(data:any){
    return this.http.post<any>("http://localhost:3000/cocktails", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCocktails(){
    return this.http.get<any>("http://localhost:3000/cocktails")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCocktails(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/cocktails/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCocktails(id:number){
    return this.http.delete<any>("http://localhost:3000/cocktails/" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  
}
