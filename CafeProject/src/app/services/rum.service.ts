import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rum } from '../interfaces/rum';

@Injectable({
  providedIn: 'root'
})
export class RumService {

  constructor(private http: HttpClient) { }

  getAllRum():Observable<Rum>{
    return this.http.get<Rum>("http://localhost:3000/rum")
  }
  
}
