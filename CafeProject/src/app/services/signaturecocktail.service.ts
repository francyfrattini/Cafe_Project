import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signaturecocktail } from '../interfaces/signaturecocktail';

@Injectable({
  providedIn: 'root'
})
export class SignaturecocktailService {

  constructor(private http: HttpClient) { }

  getAllSignaturecocktail():Observable<Signaturecocktail>{
    return this.http.get<Signaturecocktail>("http://localhost:3000/signaturecocktail")
  }
  
}
