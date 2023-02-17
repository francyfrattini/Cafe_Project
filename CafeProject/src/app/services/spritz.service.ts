import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spritz } from '../interfaces/spritz';

@Injectable({
  providedIn: 'root'
})
export class SpritzService {

  constructor(private http: HttpClient) { }

  getAllSpritz():Observable<Spritz>{
    return this.http.get<Spritz>("http://localhost:3000/spritz")
  }
  
}
