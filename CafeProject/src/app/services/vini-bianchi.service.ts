import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViniBianchi } from '../interfaces/vini-bianchi';

@Injectable({
  providedIn: 'root'
})
export class ViniBianchiService {

  constructor(private http: HttpClient) { }

  getAllViniBianchi():Observable<ViniBianchi>{
    return this.http.get<ViniBianchi>("http://localhost:3000/vinibianchi")
  }
  
}
