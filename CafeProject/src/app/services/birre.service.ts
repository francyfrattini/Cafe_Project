import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Birre } from '../interfaces/birre';

@Injectable({
  providedIn: 'root'
})
export class BirreService {

  constructor(private http: HttpClient) { }

  getAllBirre():Observable<Birre>{
    return this.http.get<Birre>("http://localhost:3000/birre")
  }
  
}
