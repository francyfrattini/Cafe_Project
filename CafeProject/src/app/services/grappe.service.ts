import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grappe } from '../interfaces/grappe';

@Injectable({
  providedIn: 'root'
})
export class GrappeService {

  constructor(private http: HttpClient) { }

  getAllGrappe():Observable<Grappe>{
    return this.http.get<Grappe>("http://localhost:3000/grappe")
  }
  
}
