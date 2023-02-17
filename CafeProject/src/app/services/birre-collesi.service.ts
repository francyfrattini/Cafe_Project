import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BirreCollesi } from '../interfaces/birre-collesi';

@Injectable({
  providedIn: 'root'
})
export class BirreCollesiService {

  constructor(private http: HttpClient) { }

  getAllBirreCollesi():Observable<BirreCollesi>{
    return this.http.get<BirreCollesi>("http://localhost:3000/birrecollesi")
  }
  
}
