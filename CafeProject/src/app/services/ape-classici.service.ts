import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApeClassici } from '../interfaces/ape-classici';

@Injectable({
  providedIn: 'root'
})
export class ApeClassiciService {

  constructor(private http: HttpClient) { }

  getAllApeClassici():Observable<ApeClassici>{
    return this.http.get<ApeClassici>("http://localhost:3000/aperitiviclassici")
  }
  
}
