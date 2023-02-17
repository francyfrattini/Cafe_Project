import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktails } from '../interfaces/cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  getAllCocktails():Observable<Cocktails>{
    return this.http.get<Cocktails>("http://localhost:3000/cocktails")
  }
  
}
