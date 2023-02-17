import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Caffetteria } from '../interfaces/caffetteria';

@Injectable({
  providedIn: 'root'
})
export class CaffetteriaService {

  constructor(private http: HttpClient) { }

  getAllCaffetteria():Observable<Caffetteria>{
    return this.http.get<Caffetteria>("http://localhost:3000/caffetteria")
  }
}
