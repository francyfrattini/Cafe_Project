import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gin } from '../interfaces/gin';

@Injectable({
  providedIn: 'root'
})
export class GinService {

  constructor(private http: HttpClient) { }

  getAllGin():Observable<Gin>{
    return this.http.get<Gin>("http://localhost:3000/gin")
  }
  
}
