import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PiattoApe } from '../interfaces/piatto-ape';

@Injectable({
  providedIn: 'root'
})
export class PiattoApeService {

  constructor(private http: HttpClient) { }

  getAllPiattiApe():Observable<PiattoApe>{
    return this.http.get<PiattoApe>("http://localhost:3000/piattoaperitivo")
  }
  
}
