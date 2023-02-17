import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Whisky } from '../interfaces/whisky';

@Injectable({
  providedIn: 'root'
})
export class WhiskyService {

  constructor(private http: HttpClient) { }

  getAllWhisky():Observable<Whisky>{
    return this.http.get<Whisky>("http://localhost:3000/whisky")
  }
  
}
