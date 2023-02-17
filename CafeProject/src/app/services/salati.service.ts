import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salati } from '../interfaces/salati';

@Injectable({
  providedIn: 'root'
})
export class SalatiService {

  constructor(private http: HttpClient) { }

  getAllSalati():Observable<Salati>{
    return this.http.get<Salati>("http://localhost:3000/salati")
  }
}
