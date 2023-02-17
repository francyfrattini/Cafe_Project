import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rose } from '../interfaces/rose';

@Injectable({
  providedIn: 'root'
})
export class RoseService {

  constructor(private http: HttpClient) { }

  getAllRose():Observable<Rose>{
    return this.http.get<Rose>("http://localhost:3000/rose")
  }
  
}
