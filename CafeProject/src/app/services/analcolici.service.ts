import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analcolici } from '../interfaces/analcolici';

@Injectable({
  providedIn: 'root'
})
export class AnalcoliciService {

  constructor(private http: HttpClient) { }

  getAllAnalcolici():Observable<Analcolici>{
    return this.http.get<Analcolici>("http://localhost:3000/analcolici")
  }
  
}
