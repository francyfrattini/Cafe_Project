import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bollicine } from '../interfaces/bollicine';

@Injectable({
  providedIn: 'root'
})
export class BollicineService {

  constructor(private http: HttpClient) { }

  getAllBollicine():Observable<Bollicine>{
    return this.http.get<Bollicine>("http://localhost:3000/bollicine")
  }
  
}
