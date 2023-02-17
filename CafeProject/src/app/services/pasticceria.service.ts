import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasticceria } from '../interfaces/pasticceria';

@Injectable({
  providedIn: 'root'
})
export class PasticceriaService {

  constructor(private http: HttpClient) { }

  getAllPasticceria():Observable<Pasticceria>{
    return this.http.get<Pasticceria>("http://localhost:3000/pasticceria")
  }
}
