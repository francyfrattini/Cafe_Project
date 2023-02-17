import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibite } from '../interfaces/bibite';

@Injectable({
  providedIn: 'root'
})
export class BibiteService {

  constructor(private http: HttpClient) { }

  getAllBibite():Observable<Bibite>{
    return this.http.get<Bibite>("http://localhost:3000/bibite")
  }
}
